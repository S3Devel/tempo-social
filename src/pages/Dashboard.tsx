
import React from 'react';
import { Dumbbell, Map, Trophy, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import RunTracker from '@/components/RunTracker';
import DashboardStats from '@/components/DashboardStats';
import ChallengesList from '@/components/ChallengesList';
import StoryPreview from '@/components/StoryPreview';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 py-6 pb-20">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Olá, Corredor!</h1>
            <p className="text-slate-500 dark:text-slate-400">Pronto para correr hoje?</p>
          </div>
          <Link to="/profile">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-pace-blue/20 flex items-center justify-center text-pace-blue">
                👤
              </div>
            </div>
          </Link>
        </div>
        
        {/* Stories */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Stories de Corredores</h2>
          <StoryPreview />
        </div>
        
        {/* Run Tracker */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Iniciar Corrida</h2>
          <RunTracker />
        </div>
        
        {/* Dashboard Stats */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Seu Progresso</h2>
          <DashboardStats />
        </div>
        
        {/* Weekly Challenges */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold">Desafios da Semana</h2>
            <a href="/challenges" className="text-pace-blue text-sm">Ver todos</a>
          </div>
          <ChallengesList />
        </div>
        
        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-4 py-3 flex justify-between">
          <a href="/dashboard" className="flex flex-col items-center text-pace-blue">
            <Map size={24} />
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
          <a href="/training" className="flex flex-col items-center text-slate-500">
            <Dumbbell size={24} />
            <span className="text-xs mt-1">Treinos</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
