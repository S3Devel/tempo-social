
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

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

  useEffect(() => {
    if (!map.current) return;

    // Add markers for runners
    runners.forEach(runner => {
      // Create a DOM element for the marker
      const el = document.createElement('div');
      el.className = 'runner-marker';
      el.style.width = '16px';
      el.style.height = '16px';
      el.style.borderRadius = '50%';
      el.style.backgroundColor = '#28B463';
      el.style.border = '2px solid white';
      el.style.boxShadow = '0 0 8px rgba(0, 0, 0, 0.3)';

      // Add marker to the map
      const marker = new mapboxgl.Marker(el)
        .setLngLat([runner.longitude, runner.latitude])
        .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
          `<div style="text-align: center;">
            <div style="font-weight: bold;">${runner.name}</div>
            <div style="font-size: 12px; color: #666;">Correndo agora</div>
          </div>`
        ))
        .addTo(map.current);

      otherRunnerMarkersRef.current[runner.id] = marker;
    });

    // Cleanup function
    return () => {
      Object.values(otherRunnerMarkersRef.current).forEach(marker => {
        marker.remove();
      });
      otherRunnerMarkersRef.current = {};
    };
  }, [map, runners]);

  return null; // This component doesn't render anything
};

export default OtherRunners;
