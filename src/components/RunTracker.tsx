
import React, { useState, useEffect } from 'react';
import { Clock, ArrowUp, TrendingUp } from 'lucide-react';
import MapComponent from './MapComponent';
import { Button } from './ui/button';

const RunTracker = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState<number | null>(null);
  
  useEffect(() => {
    // Clear interval when component unmounts
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);
  
  const toggleRun = () => {
    if (isRunning) {
      // Stop the timer
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
    } else {
      // Start the timer
      const id = window.setInterval(() => {
        setElapsedTime(prev => prev + 1);
      }, 1000);
      setIntervalId(Number(id));
    }
    setIsRunning(!isRunning);
  };
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  return (
    <div className="bg-white dark:bg-slate-900/80 rounded-2xl shadow-card overflow-hidden">
      {/* Map Component */}
      <MapComponent />
      
      {/* Floating Stats */}
      <div className="p-4 grid grid-cols-3 gap-2">
        <div className="glass-card rounded-lg p-3 flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-pace-blue/20 flex items-center justify-center text-pace-blue">
            <Clock size={18} />
          </div>
          <div>
            <div className="text-xs text-slate-500">Tempo</div>
            <div className="text-sm font-bold">{formatTime(elapsedTime)}</div>
          </div>
        </div>
        
        <div className="glass-card rounded-lg p-3 flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-pace-green/20 flex items-center justify-center text-pace-green">
            <TrendingUp size={18} />
          </div>
          <div>
            <div className="text-xs text-slate-500">Distância</div>
            <div className="text-sm font-bold">0.0 km</div>
          </div>
        </div>
        
        <div className="glass-card rounded-lg p-3 flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500">
            <ArrowUp size={18} />
          </div>
          <div>
            <div className="text-xs text-slate-500">Elevação</div>
            <div className="text-sm font-bold">0 m</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RunTracker;
