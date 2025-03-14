
import React, { useRef, useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapInitializer from './map/MapInitializer';
import RouteTracker from './map/RouteTracker';
import MapControls from './map/MapControls';
import UserMarker from './map/UserMarker';
import OtherRunners from './map/OtherRunners';
import RunnersCount from './map/RunnersCount';
import { useToast } from '@/hooks/use-toast';

// Função para gerar corredores aleatórios próximos a uma localização
const generateRandomRunners = (centerLat: number, centerLng: number, count: number, radius: number = 0.01) => {
  const runners = [];
  const names = [
    'Carlos Silva', 'Maria Santos', 'João Oliveira', 'Ana Souza',
    'Pedro Costa', 'Lucia Ferreira', 'Paulo Rodrigues', 'Fernanda Lima',
    'Gabriel Almeida', 'Patricia Martins', 'Ricardo Gomes', 'Juliana Nunes',
    'Bruno Cardoso', 'Camila Pereira', 'Fernando Dias', 'Aline Barbosa'
  ];
  
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * radius;
    const latitude = centerLat + distance * Math.sin(angle);
    const longitude = centerLng + distance * Math.cos(angle);
    
    runners.push({
      id: `runner-${i}`,
      latitude,
      longitude,
      name: names[Math.floor(Math.random() * names.length)]
    });
  }
  
  return runners;
};

const MapComponent = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [isTracking, setIsTracking] = useState(false);
  const [currentPosition, setCurrentPosition] = useState<[number, number] | null>(null);
  const userMarkerRef = useRef<mapboxgl.Marker | null>(null);
  const pathRef = useRef<GeoJSON.Feature<GeoJSON.LineString> | null>(null);
  const routeCoordinates = useRef<Array<[number, number]>>([]);
  const [runners, setRunners] = useState<any[]>([]);
  const { toast } = useToast();
  
  // Mapbox API key
  const mapboxApiKey = 'pk.eyJ1IjoicGFjZXJ1bmJyIiwiYSI6ImNtN2JjM2hlMjA1YWUya29kNHB4amppMTYifQ.o-rD1jVDIn1pPUnkNwUZjQ';

  // Atualizar os corredores quando a posição atual mudar
  useEffect(() => {
    if (!currentPosition) return;
    
    // Gerar corredores iniciais
    const initialRunners = generateRandomRunners(currentPosition[1], currentPosition[0], 15);
    setRunners(initialRunners);
    
    // Simular movimento de corredores a cada 5 segundos
    const movementInterval = setInterval(() => {
      // Mover corredores existentes aleatoriamente
      setRunners(prevRunners => {
        return prevRunners.map(runner => {
          // Movimento aleatório pequeno
          const latChange = (Math.random() - 0.5) * 0.0005;
          const lngChange = (Math.random() - 0.5) * 0.0005;
          
          return {
            ...runner,
            latitude: runner.latitude + latChange,
            longitude: runner.longitude + lngChange
          };
        });
      });
      
      // Ocasionalmente adicionar novos corredores
      if (Math.random() > 0.7) {
        const newRunner = generateRandomRunners(currentPosition[1], currentPosition[0], 1)[0];
        setRunners(prev => [...prev, newRunner]);
        
        toast({
          title: "Novo corredor",
          description: `${newRunner.name} começou a correr perto de você`,
        });
      }
      
      // Ocasionalmente remover corredores
      if (Math.random() > 0.8 && runners.length > 10) {
        setRunners(prev => {
          const index = Math.floor(Math.random() * prev.length);
          const runnerLeft = prev[index];
          
          toast({
            title: "Corredor saiu",
            description: `${runnerLeft.name} parou de correr`,
          });
          
          return prev.filter((_, i) => i !== index);
        });
      }
    }, 5000);
    
    return () => {
      clearInterval(movementInterval);
    };
  }, [currentPosition, toast]);

  // Function to toggle tracking
  const toggleTracking = () => {
    if (isTracking) {
      stopTracking();
    } else {
      startTracking();
    }
  };

  // Function to start tracking
  const startTracking = () => {
    setIsTracking(true);
    routeCoordinates.current = currentPosition ? [currentPosition] : [];
    
    toast({
      title: "Corrida iniciada",
      description: "Seu percurso está sendo rastreado em tempo real",
    });
  };

  // Function to stop tracking
  const stopTracking = () => {
    setIsTracking(false);
    toast({
      title: "Corrida pausada",
      description: "Seu rastreamento foi pausado",
    });
  };

  return (
    <div className="relative h-[60vh] md:h-[70vh] w-full bg-white dark:bg-slate-950 rounded-2xl shadow-card overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />
      
      {/* Map initialization */}
      <MapInitializer 
        mapContainer={mapContainer}
        map={map}
        mapboxApiKey={mapboxApiKey}
        setCurrentPosition={setCurrentPosition}
        pathRef={pathRef}
      />
      
      {/* Route tracking */}
      {isTracking && (
        <RouteTracker 
          map={map}
          isTracking={isTracking}
          setCurrentPosition={setCurrentPosition}
          routeCoordinates={routeCoordinates}
          pathRef={pathRef}
          userMarkerRef={userMarkerRef}
        />
      )}
      
      {/* User marker */}
      {currentPosition && (
        <UserMarker 
          map={map}
          position={currentPosition}
          userMarkerRef={userMarkerRef}
        />
      )}
      
      {/* Other runners */}
      <OtherRunners 
        map={map}
        runners={runners}
      />
      
      {/* UI Controls */}
      <MapControls 
        isTracking={isTracking}
        toggleTracking={toggleTracking}
      />
      
      {/* Runners count indicator */}
      <RunnersCount count={runners.length} />
    </div>
  );
};

export default MapComponent;
