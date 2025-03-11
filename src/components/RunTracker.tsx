
import React, { useState } from 'react';
import { Play, Pause, Clock, ArrowUp, TrendingUp } from 'lucide-react';

const RunTracker = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  
  const toggleRun = () => {
    setIsRunning(!isRunning);
  };
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  return (
    <div className="bg-white dark:bg-slate-900/80 rounded-2xl shadow-card overflow-hidden">
      <div className="relative h-48 bg-slate-100 dark:bg-slate-800">
        {/* Map Preview */}
        <div className="absolute inset-0 bg-pace-light">
          {/* Stylized map elements */}
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white/20 rounded-full"></div>
          <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-white/30 rounded-full"></div>
          
          {/* Park area */}
          <div className="absolute top-[30%] left-[20%] w-[60%] h-[25%] bg-pace-green/10 rounded-xl"></div>
          
          {/* Roads */}
          <div className="absolute top-[15%] left-0 w-full h-[3%] bg-white/40"></div>
          <div className="absolute top-[45%] left-0 w-full h-[3%] bg-white/40"></div>
          <div className="absolute top-[65%] left-0 w-full h-[3%] bg-white/40"></div>
          <div className="absolute top-0 left-[25%] w-[3%] h-full bg-white/40"></div>
          <div className="absolute top-0 left-[50%] w-[3%] h-full bg-white/40"></div>
          <div className="absolute top-0 left-[75%] w-[3%] h-full bg-white/40"></div>
        </div>
        
        {/* Floating Stats */}
        <div className="absolute top-4 left-4 glass-card rounded-lg p-3 flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-pace-blue/20 flex items-center justify-center text-pace-blue">
            <Clock size={18} />
          </div>
          <div>
            <div className="text-xs text-slate-500">Tempo</div>
            <div className="text-sm font-bold">{formatTime(elapsedTime)}</div>
          </div>
        </div>
        
        <div className="absolute top-4 right-4 glass-card rounded-lg p-3 flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-pace-green/20 flex items-center justify-center text-pace-green">
            <TrendingUp size={18} />
          </div>
          <div>
            <div className="text-xs text-slate-500">Distância</div>
            <div className="text-sm font-bold">0.0 km</div>
          </div>
        </div>
        
        <div className="absolute bottom-4 left-4 glass-card rounded-lg p-3 flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500">
            <ArrowUp size={18} />
          </div>
          <div>
            <div className="text-xs text-slate-500">Elevação</div>
            <div className="text-sm font-bold">0 m</div>
          </div>
        </div>
      </div>
      
      {/* Controls */}
      <div className="p-4 flex justify-center">
        <button 
          onClick={toggleRun}
          className={`w-16 h-16 rounded-full flex items-center justify-center text-white transition-colors ${isRunning ? 'bg-red-500' : 'bg-pace-blue'}`}
        >
          {isRunning ? <Pause size={28} /> : <Play size={28} />}
        </button>
      </div>
    </div>
  );
};

export default RunTracker;
