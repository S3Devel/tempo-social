
import React, { useState } from 'react';
import { MapPin, Users, Trophy, Flag } from 'lucide-react';
import RankingTabs from '@/components/rankings/RankingTabs';

const Rankings = () => {
  const [activeTab, setActiveTab] = useState('distance');
  
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 py-6 pb-20">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Rankings</h1>
        </div>
        
        {/* Main Content */}
        <div className="bg-white dark:bg-slate-900/80 rounded-xl shadow-card p-4 mb-6">
          <h2 className="text-xl font-bold mb-4">Rankings Globais</h2>
          <RankingTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        
        {/* Estatísticas Adicionais ou Filtros */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white dark:bg-slate-900/80 rounded-xl shadow-card p-4">
            <h3 className="font-semibold mb-2">Filtrar por Região</h3>
            <div className="flex flex-wrap gap-2">
              <button className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm">
                Global
              </button>
              <button className="px-3 py-1 bg-pace-blue/10 text-pace-blue rounded-full text-sm">
                Brasil
              </button>
              <button className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm">
                São Paulo
              </button>
              <button className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm">
                Rio de Janeiro
              </button>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-900/80 rounded-xl shadow-card p-4">
            <h3 className="font-semibold mb-2">Filtrar por Período</h3>
            <div className="flex flex-wrap gap-2">
              <button className="px-3 py-1 bg-pace-blue/10 text-pace-blue rounded-full text-sm">
                Todos os tempos
              </button>
              <button className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm">
                Este mês
              </button>
              <button className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm">
                Esta semana
              </button>
            </div>
          </div>
        </div>
        
        {/* Mais Rankings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white dark:bg-slate-900/80 rounded-xl shadow-card p-4">
            <h3 className="font-semibold mb-2">Desafios</h3>
            <p className="text-sm text-slate-500 mb-3">
              Ranking dos principais desafios completados
            </p>
            <a href="#" className="text-pace-blue text-sm">Ver todos os desafios →</a>
          </div>
          
          <div className="bg-white dark:bg-slate-900/80 rounded-xl shadow-card p-4">
            <h3 className="font-semibold mb-2">Grupos</h3>
            <p className="text-sm text-slate-500 mb-3">
              Ranking dos grupos mais ativos
            </p>
            <a href="#" className="text-pace-blue text-sm">Ver todos os grupos →</a>
          </div>
        </div>
        
        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-4 py-3 flex justify-between">
          <a href="/dashboard" className="flex flex-col items-center text-slate-500">
            <MapPin size={24} />
            <span className="text-xs mt-1">Correr</span>
          </a>
          <a href="/challenges" className="flex flex-col items-center text-slate-500">
            <Trophy size={24} />
            <span className="text-xs mt-1">Desafios</span>
          </a>
          <a href="/community" className="flex flex-col items-center text-slate-500">
            <Users size={24} />
            <span className="text-xs mt-1">Comunidade</span>
          </a>
          <a href="/rankings" className="flex flex-col items-center text-pace-blue">
            <Flag size={24} />
            <span className="text-xs mt-1">Rankings</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Rankings;
