
import React from 'react';

interface ChallengeCardProps {
  title: string;
  description: string;
  icon: string;
  target: string;
  progress: number;
  progressText: string;
  color?: string;
  delay?: number;
}

const ChallengeCard = ({ 
  title, 
  description, 
  icon, 
  target, 
  progress, 
  progressText,
  color = 'pace-blue',
  delay = 0
}: ChallengeCardProps) => {
  return (
    <div 
      className="bg-white dark:bg-slate-900/80 rounded-2xl shadow-card overflow-hidden transition-all duration-300 
                hover:shadow-card-hover hover:-translate-y-1 animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`bg-${color}/10 px-6 py-4 flex justify-between items-center`}>
        <h3 className={`text-lg font-bold text-${color}`}>{title}</h3>
        <div className={`w-12 h-12 rounded-full bg-${color}/20 flex items-center justify-center text-${color}`}>
          {icon}
        </div>
      </div>
      
      <div className="px-6 py-4">
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
          {description}
        </p>
        
        <div className="mb-2 flex justify-between items-center">
          <span className="text-xs font-medium text-slate-500">{progressText}</span>
          <span className="text-xs font-medium text-slate-700">{target}</span>
        </div>
        
        <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <div 
            className={`h-full bg-${color} rounded-full transition-all duration-1000 ease-out`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
