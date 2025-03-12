
import React from 'react';
import { Button } from '@/components/ui/button';
import { Pause, Play } from 'lucide-react';

type MapControlsProps = {
  isTracking: boolean;
  toggleTracking: () => void;
};

const MapControls = ({ isTracking, toggleTracking }: MapControlsProps) => {
  return (
    <div className="absolute bottom-4 right-4 flex gap-2">
      <Button 
        onClick={toggleTracking}
        size="lg" 
        className={isTracking ? "bg-red-500 hover:bg-red-600" : "bg-pace-blue hover:bg-pace-blue/90"}
      >
        {isTracking ? (
          <>
            <Pause className="mr-2 h-5 w-5" /> Pausar
          </>
        ) : (
          <>
            <Play className="mr-2 h-5 w-5" /> Iniciar
          </>
        )}
      </Button>
    </div>
  );
};

export default MapControls;
