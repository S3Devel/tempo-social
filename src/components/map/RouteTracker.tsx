
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { useToast } from '@/hooks/use-toast';

type RouteTrackerProps = {
  map: React.MutableRefObject<mapboxgl.Map | null>;
  isTracking: boolean;
  setCurrentPosition: React.Dispatch<React.SetStateAction<[number, number] | null>>;
  routeCoordinates: React.MutableRefObject<Array<[number, number]>>;
  pathRef: React.MutableRefObject<GeoJSON.Feature<GeoJSON.LineString> | null>;
  userMarkerRef: React.MutableRefObject<mapboxgl.Marker | null>;
};

const RouteTracker = ({ 
  map, 
  isTracking, 
  setCurrentPosition, 
  routeCoordinates, 
  pathRef, 
  userMarkerRef 
}: RouteTrackerProps) => {
  const watchIdRef = useRef<number | null>(null);
  const { toast } = useToast();

  // Update the route path on the map
  const updatePath = (newCoord: [number, number]) => {
    if (!map.current || !pathRef.current) return;

    routeCoordinates.current.push(newCoord);
    
    if (pathRef.current.geometry.coordinates) {
      pathRef.current.geometry.coordinates = routeCoordinates.current;
    }

    // Update the route source with typecasting to handle the setData method
    const source = map.current.getSource('route') as mapboxgl.GeoJSONSource;
    if (source) {
      source.setData(pathRef.current);
    }
  };

  useEffect(() => {
    // Start or stop tracking based on isTracking state
    if (isTracking) {
      if (watchIdRef.current) return; // Already tracking
      
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { longitude, latitude } = position.coords;
          const newPosition: [number, number] = [longitude, latitude];
          
          setCurrentPosition(newPosition);
          
          // Update user marker position
          if (userMarkerRef.current) {
            userMarkerRef.current.setLngLat(newPosition);
          }
          
          // Update path
          updatePath(newPosition);
          
          // Center map on user (follow mode)
          map.current?.panTo(newPosition);
        },
        (error) => {
          console.error('Error tracking location:', error);
          toast({
            variant: "destructive",
            title: "Erro de rastreamento",
            description: "Não foi possível rastrear sua localização. Verifique as permissões do navegador.",
          });
        },
        {
          enableHighAccuracy: true,
          maximumAge: 0,
          timeout: 5000,
        }
      );
      
      watchIdRef.current = watchId;
      
      return () => {
        if (watchIdRef.current) {
          navigator.geolocation.clearWatch(watchIdRef.current);
          watchIdRef.current = null;
        }
      };
    } else {
      // Stop tracking
      if (watchIdRef.current) {
        navigator.geolocation.clearWatch(watchIdRef.current);
        watchIdRef.current = null;
      }
    }
  }, [isTracking, map, setCurrentPosition, userMarkerRef, toast]);

  return null; // This component doesn't render anything
};

export default RouteTracker;
