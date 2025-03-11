
import React from 'react';
import { BarChart2, TrendingUp, Activity, Calendar } from 'lucide-react';

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white dark:bg-slate-900/80 rounded-xl shadow-card p-4 flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-pace-blue/10 flex items-center justify-center text-pace-blue">
          <TrendingUp size={22} />
        </div>
        <div>
          <div className="text-sm text-slate-500">Distância Total</div>
          <div className="text-lg font-bold">48.6 km</div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-slate-900/80 rounded-xl shadow-card p-4 flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-pace-green/10 flex items-center justify-center text-pace-green">
          <Activity size={22} />
        </div>
        <div>
          <div className="text-sm text-slate-500">Calorias</div>
          <div className="text-lg font-bold">2,845</div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-slate-900/80 rounded-xl shadow-card p-4 flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
          <Calendar size={22} />
        </div>
        <div>
          <div className="text-sm text-slate-500">Corridas</div>
          <div className="text-lg font-bold">12</div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-slate-900/80 rounded-xl shadow-card p-4 flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
          <BarChart2 size={22} />
        </div>
        <div>
          <div className="text-sm text-slate-500">Ranking</div>
          <div className="text-lg font-bold">#24</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;
