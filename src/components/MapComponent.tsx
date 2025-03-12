import React, { useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapInitializer from './map/MapInitializer';
import RouteTracker from './map/RouteTracker';
import MapControls from './map/MapControls';
import UserMarker from './map/UserMarker';
import OtherRunners from './map/OtherRunners';
import RunnersCount from './map/RunnersCount';
import { useToast } from '@/hooks/use-toast';

// Sample dummy data for other runners (in a real app, this would come from a backend)
const dummyRunners = [
  { id: '1', latitude: -23.5505, longitude: -46.6333, name: 'Carlos Silva' },
  { id: '2', latitude: -23.5605, longitude: -46.6433, name: 'Maria Santos' },
  { id: '3', latitude: -23.5545, longitude: -46.6393, name: 'João Oliveira' },
  { id: '4', latitude: -23.5585, longitude: -46.6253, name: 'Ana Souza' },
];

const MapComponent = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [isTracking, setIsTracking] = useState(false);
  const [currentPosition, setCurrentPosition] = useState<[number, number] | null>(null);
  const userMarkerRef = useRef<mapboxgl.Marker | null>(null);
  const pathRef = useRef<GeoJSON.Feature<GeoJSON.LineString> | null>(null);
  const routeCoordinates = useRef<Array<[number, number]>>([]);
  const { toast } = useToast();
  
  // Mapbox API key
  const mapboxApiKey = 'pk.eyJ1IjoicGFjZXJ1bmJyIiwiYSI6ImNtN2JjM2hlMjA1YWUya29kNHB4amppMTYifQ.o-rD1jVDIn1pPUnkNwUZjQ';

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
        runners={dummyRunners}
      />
      
      {/* UI Controls */}
      <MapControls 
        isTracking={isTracking}
        toggleTracking={toggleTracking}
      />
      
      {/* Runners count indicator */}
      <RunnersCount count={dummyRunners.length} />
    </div>
  );
};

export default MapComponent;
