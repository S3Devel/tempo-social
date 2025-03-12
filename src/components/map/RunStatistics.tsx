
import React, { useEffect, useState } from 'react';

type RunStatisticsProps = {
  routeCoordinates: React.MutableRefObject<Array<[number, number]>>;
  isTracking: boolean;
  elapsedTime: number;
};

const RunStatistics = ({ routeCoordinates, isTracking, elapsedTime }: RunStatisticsProps) => {
  const [distance, setDistance] = useState(0);
  const [pace, setPace] = useState(0);
  
  // Calculate distance between two coordinates in kilometers
  const calculateDistance = (coord1: [number, number], coord2: [number, number]): number => {
    const toRad = (value: number) => (value * Math.PI) / 180;
    const R = 6371; // Earth's radius in km
    
    const dLat = toRad(coord2[1] - coord1[1]);
    const dLon = toRad(coord2[0] - coord1[0]);
    
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(coord1[1])) * Math.cos(toRad(coord2[1])) * 
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    
    return distance;
  };
  
  // Calculate total distance of the route
  const calculateTotalDistance = (coordinates: Array<[number, number]>): number => {
    if (coordinates.length < 2) return 0;
    
    let totalDistance = 0;
    for (let i = 1; i < coordinates.length; i++) {
      totalDistance += calculateDistance(coordinates[i - 1], coordinates[i]);
    }
    
    return totalDistance;
  };
  
  // Calculate pace (minutes per kilometer)
  const calculatePace = (distanceKm: number, timeSeconds: number): number => {
    if (distanceKm === 0) return 0;
    const paceInMinPerKm = (timeSeconds / 60) / distanceKm;
    return paceInMinPerKm;
  };
  
  // Format pace to mm:ss
  const formatPace = (paceMinutes: number): string => {
    if (paceMinutes === 0 || !isFinite(paceMinutes)) return '--:--';
    
    const mins = Math.floor(paceMinutes);
    const secs = Math.floor((paceMinutes - mins) * 60);
    
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  // Update statistics every second while tracking
  useEffect(() => {
    if (!isTracking) return;
    
    const interval = setInterval(() => {
      const totalDistance = calculateTotalDistance(routeCoordinates.current);
      setDistance(totalDistance);
      
      const currentPace = calculatePace(totalDistance, elapsedTime);
      setPace(currentPace);
    }, 1000);
    
    return () => clearInterval(interval);
  }, [isTracking, routeCoordinates, elapsedTime]);
  
  return (
    <div className="absolute bottom-20 left-4 right-4 bg-white dark:bg-slate-800 bg-opacity-90 dark:bg-opacity-90 rounded-xl p-4 shadow-lg">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-xs text-slate-500">Distância</div>
          <div className="text-2xl font-bold">{distance.toFixed(2)} km</div>
        </div>
        <div>
          <div className="text-xs text-slate-500">Ritmo</div>
          <div className="text-2xl font-bold">{formatPace(pace)} min/km</div>
        </div>
      </div>
    </div>
  );
};

export default RunStatistics;
