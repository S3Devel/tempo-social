
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

type UserMarkerProps = {
  map: React.MutableRefObject<mapboxgl.Map | null>;
  position: [number, number] | null;
  userMarkerRef: React.MutableRefObject<mapboxgl.Marker | null>;
};

const UserMarker = ({ map, position, userMarkerRef }: UserMarkerProps) => {
  useEffect(() => {
    if (!map.current || !position) return;

    // Create a DOM element for the marker
    const el = document.createElement('div');
    el.className = 'user-marker';
    el.style.width = '20px';
    el.style.height = '20px';
    el.style.borderRadius = '50%';
    el.style.backgroundColor = '#2E86C1';
    el.style.border = '3px solid white';
    el.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';

    // Remove existing marker if there is one
    if (userMarkerRef.current) {
      userMarkerRef.current.remove();
    }

    // Add marker to the map
    userMarkerRef.current = new mapboxgl.Marker(el)
      .setLngLat(position)
      .addTo(map.current);

    // Cleanup function
    return () => {
      if (userMarkerRef.current) {
        userMarkerRef.current.remove();
        userMarkerRef.current = null;
      }
    };
  }, [map, position, userMarkerRef]);

  return null; // This component doesn't render anything
};

export default UserMarker;
