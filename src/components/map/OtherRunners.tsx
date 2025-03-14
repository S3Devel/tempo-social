
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { useToast } from '@/hooks/use-toast';

type Runner = {
  id: string;
  latitude: number;
  longitude: number;
  name: string;
  avatar?: string;
};

type OtherRunnersProps = {
  map: React.MutableRefObject<mapboxgl.Map | null>;
  runners: Runner[];
};

const OtherRunners = ({ map, runners }: OtherRunnersProps) => {
  const otherRunnerMarkersRef = useRef<{[key: string]: mapboxgl.Marker}>({});
  const heatmapSourceAdded = useRef<boolean>(false);
  const { toast } = useToast();

  // Função para gerar pontos aleatórios ao redor de cada corredor para o mapa de calor
  const generateHeatmapPoints = (runners: Runner[], radius: number = 0.005, pointsPerRunner: number = 10) => {
    const points: { type: string; properties: {}; geometry: { type: string; coordinates: number[] } }[] = [];
    
    runners.forEach(runner => {
      // Adicionar o ponto central do corredor
      points.push({
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Point',
          coordinates: [runner.longitude, runner.latitude]
        }
      });
      
      // Adicionar pontos aleatórios ao redor do corredor para criar áreas de densidade
      for (let i = 0; i < pointsPerRunner; i++) {
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * radius;
        const newLng = runner.longitude + distance * Math.cos(angle);
        const newLat = runner.latitude + distance * Math.sin(angle);
        
        points.push({
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Point',
            coordinates: [newLng, newLat]
          }
        });
      }
    });
    
    return {
      type: "FeatureCollection" as const,
      features: points
    };
  };

  useEffect(() => {
    if (!map.current) return;

    try {
      // Adicionar camada de mapa de calor (apenas uma vez)
      if (!heatmapSourceAdded.current) {
        // Verificar se o mapa já está carregado
        if (map.current.isStyleLoaded()) {
          addHeatmapLayer();
        } else {
          // Aguardar até que o mapa esteja totalmente carregado
          map.current.on('load', addHeatmapLayer);
        }
      } else {
        // Atualizar os dados do mapa de calor se a fonte já existir
        updateHeatmapData();
      }

      // Adicionar marcadores para corredores individuais
      runners.forEach(runner => {
        // Criar um elemento DOM para o marcador
        const el = document.createElement('div');
        el.className = 'runner-marker';
        el.style.width = '16px';
        el.style.height = '16px';
        el.style.borderRadius = '50%';
        el.style.backgroundColor = '#28B463';
        el.style.border = '2px solid white';
        el.style.boxShadow = '0 0 8px rgba(0, 0, 0, 0.3)';

        // Adicionar marcador ao mapa
        if (otherRunnerMarkersRef.current[runner.id]) {
          // Atualizar posição do marcador existente
          otherRunnerMarkersRef.current[runner.id].setLngLat([runner.longitude, runner.latitude]);
        } else {
          // Criar novo marcador
          const marker = new mapboxgl.Marker(el)
            .setLngLat([runner.longitude, runner.latitude])
            .setPopup(
              new mapboxgl.Popup({ offset: 25 }).setHTML(
                `<div style="text-align: center;">
                  <div style="font-weight: bold;">${runner.name}</div>
                  <div style="font-size: 12px; color: #666;">Correndo agora</div>
                </div>`
              )
            )
            .addTo(map.current);

          otherRunnerMarkersRef.current[runner.id] = marker;
        }
      });

      // Mostrar toast informativo sobre o número de corredores
      if (runners.length > 0 && !heatmapSourceAdded.current) {
        toast({
          title: `${runners.length} corredores ativos`,
          description: "O mapa de calor mostra as áreas com maior concentração de corredores",
        });
      }
    } catch (error) {
      console.error('Erro ao adicionar corredores ao mapa:', error);
    }

    function addHeatmapLayer() {
      if (!map.current || heatmapSourceAdded.current) return;

      // Adicionar fonte de dados para o mapa de calor
      map.current.addSource('runners-heat', {
        type: 'geojson',
        data: generateHeatmapPoints(runners)
      });

      // Adicionar camada de mapa de calor
      map.current.addLayer({
        id: 'runners-heat',
        type: 'heatmap',
        source: 'runners-heat',
        maxzoom: 18,
        paint: {
          // Intensidade do mapa de calor
          'heatmap-weight': 1,
          // Cor baseada na densidade (verde para baixa, amarelo para média, vermelho para alta)
          'heatmap-color': [
            'interpolate',
            ['linear'],
            ['heatmap-density'],
            0, 'rgba(33,102,172,0)',
            0.2, 'rgb(103,169,207)',
            0.4, 'rgb(209,229,240)',
            0.6, 'rgb(253,219,199)',
            0.8, 'rgb(239,138,98)',
            1, 'rgb(178,24,43)'
          ],
          // Raio de influência de cada ponto
          'heatmap-radius': 25,
          // Opacidade do mapa de calor
          'heatmap-opacity': 0.7
        }
      });

      heatmapSourceAdded.current = true;
    }

    function updateHeatmapData() {
      if (!map.current || !heatmapSourceAdded.current) return;

      // Atualizar os dados da fonte do mapa de calor
      const source = map.current.getSource('runners-heat') as mapboxgl.GeoJSONSource;
      if (source) {
        source.setData(generateHeatmapPoints(runners));
      }
    }

    // Função de limpeza
    return () => {
      // Remover marcadores do mapa
      Object.values(otherRunnerMarkersRef.current).forEach(marker => {
        marker.remove();
      });
      otherRunnerMarkersRef.current = {};
    };
  }, [map, runners, toast]);

  return null; // Este componente não renderiza nada
};

export default OtherRunners;
