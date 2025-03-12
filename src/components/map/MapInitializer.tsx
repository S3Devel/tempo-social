
import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { useToast } from '@/hooks/use-toast';

type MapInitializerProps = {
  mapContainer: React.RefObject<HTMLDivElement>;
  map: React.MutableRefObject<mapboxgl.Map | null>;
  mapboxApiKey: string;
  setCurrentPosition: React.Dispatch<React.SetStateAction<[number, number] | null>>;
  pathRef: React.MutableRefObject<GeoJSON.Feature<GeoJSON.LineString> | null>;
};

const MapInitializer = ({ 
  mapContainer, 
  map, 
  mapboxApiKey, 
  setCurrentPosition, 
  pathRef 
}: MapInitializerProps) => {
  const { toast } = useToast();

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = mapboxApiKey;
    
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-46.6333, -23.5505], // Default center (São Paulo)
        zoom: 13,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );

      // Initialize the map
      map.current.on('load', () => {
        // Add a source for the route path
        map.current?.addSource('route', {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: [],
            },
          },
        });

        // Add a layer for the route path
        map.current?.addLayer({
          id: 'route',
          type: 'line',
          source: 'route',
          layout: {
            'line-join': 'round',
            'line-cap': 'round',
          },
          paint: {
            'line-color': '#2E86C1',
            'line-width': 6,
          },
        });

        // Initialize path feature
        pathRef.current = {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: [],
          },
        };

        // Get current location and center map
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { longitude, latitude } = position.coords;
            setCurrentPosition([longitude, latitude]);
            
            // Center map on user's location
            map.current?.flyTo({
              center: [longitude, latitude],
              essential: true,
              zoom: 15,
            });

            toast({
              title: "Localização obtida",
              description: "Mapa centralizado na sua localização atual",
            });
          },
          (error) => {
            console.error('Error getting location:', error);
            toast({
              variant: "destructive",
              title: "Erro de localização",
              description: "Não foi possível obter sua localização. Verifique as permissões do navegador.",
            });
          }
        );
      });

      return () => {
        map.current?.remove();
      };
    } catch (error) {
      console.error('Error initializing map:', error);
      toast({
        variant: "destructive",
        title: "Erro ao inicializar mapa",
        description: "Ocorreu um erro ao inicializar o mapa.",
      });
    }
  }, [mapContainer, mapboxApiKey, map, setCurrentPosition, pathRef, toast]);

  return null; // This component doesn't render anything
};

export default MapInitializer;
