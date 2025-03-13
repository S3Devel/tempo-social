
import React from 'react';
import { Bell, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FeedHeaderProps {
  onAddPostClick: () => void;
}

const FeedHeader = ({ onAddPostClick }: FeedHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold">Feed</h1>
      <div className="flex space-x-2">
        <Button variant="ghost" size="icon" className="text-slate-700 dark:text-slate-300">
          <Bell size={24} />
        </Button>
        <Button 
          onClick={onAddPostClick}
          className="bg-pace-blue hover:bg-pace-blue/90 text-white"
          size="icon"
        >
          <PlusCircle size={24} />
        </Button>
      </div>
    </div>
  );
};

export default FeedHeader;
