
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, color = 'bg-pace-blue/10 text-pace-blue', delay = 0 }: FeatureCardProps) => {
  return (
    <div 
      className="feature-card group animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
