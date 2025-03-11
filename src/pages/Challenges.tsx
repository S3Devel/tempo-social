import React from 'react';
import { Map, Trophy, Users, Dumbbell, Medal, Award, Target } from 'lucide-react';

const Challenges = () => {
  const weeklyChallenge = {
    title: 'Distância Semanal',
    description: 'Corra pelo menos 30km esta semana',
    progress: 82,
    current: 24.8,
    target: 30,
    remaining: '2 dias',
    participants: 586,
    color: 'pace-blue'
  };
  
  const challenges = [
    {
      title: 'Desafio Calórico',
      icon: '🔥',
      description: 'Queime 2,000 calorias através de corridas',
      progress: 73,
      current: 1465,
      target: 2000,
      unit: 'cal',
      color: 'pace-green'
    },
    {
      title: 'Sequência de Corridas',
      icon: '⚡',
      description: 'Corra pelo menos 3km por 5 dias consecutivos',
      progress: 60,
      current: 3,
      target: 5,
      unit: 'dias',
      color: 'purple-500'
    },
    {
      title: 'Elevação Total',
      icon: '⛰️',
      description: 'Acumule 500m de elevação em suas corridas',
      progress: 45,
      current: 225,
      target: 500,
      unit: 'm',
      color: 'amber-500'
    }
  ];
  
  const leaderboard = [
    { rank: 1, name: 'Marcos Silva', avatar: '👨', distance: 42.5 },
    { rank: 2, name: 'Juliana Costa', avatar: '👩', distance: 38.2 },
    { rank: 3, name: 'Ricardo Gomes', avatar: '🧔', distance: 35.7 },
    { rank: 4, name: 'Fernanda Lima', avatar: '👧', distance: 31.5 },
    { rank: 5, name: 'Carlos Santos', avatar: '👨', distance: 29.8 }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 py-6 pb-20">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Desafios & Rankings</h1>
          <div className="flex space-x-2">
            <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
              <Medal size={20} />
            </button>
            <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
              <Target size={20} />
            </button>
          </div>
        </div>
        
        {/* Featured Challenge */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Desafio em Destaque</h2>
          
          <div className="bg-white dark:bg-slate-900/80 rounded-2xl shadow-card overflow-hidden">
            <div className="bg-gradient-to-r from-pace-blue to-pace-green h-24 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Trophy size={48} className="text-white" />
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="text-xl font-bold mb-1">{weeklyChallenge.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">{weeklyChallenge.description}</p>
              
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">{weeklyChallenge.current} / {weeklyChallenge.target} km</span>
                <span className="text-sm font-medium text-pace-blue">{weeklyChallenge.progress}%</span>
              </div>
              
              <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-4">
                <div 
                  className="h-full bg-pace-blue rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${weeklyChallenge.progress}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between text-sm text-slate-500">
                <span>Tempo restante: {weeklyChallenge.remaining}</span>
                <span>{weeklyChallenge.participants} participantes</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Other Challenges */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Outros Desafios</h2>
          
          <div className="space-y-4">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white dark:bg-slate-900/80 rounded-xl shadow-card p-4">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full bg-${challenge.color}/20 flex items-center justify-center`}>
                      <span className="text-xl">{challenge.icon}</span>
                    </div>
                    <h3 className="font-medium">{challenge.title}</h3>
                  </div>
                  <Award size={18} className={`text-${challenge.color}`} />
                </div>
                
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">{challenge.description}</p>
                
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-medium">{challenge.current} / {challenge.target} {challenge.unit}</span>
                  <span className="text-xs font-medium" style={{ color: `var(--${challenge.color})` }}>{challenge.progress}%</span>
                </div>
                
                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${challenge.progress}%`, backgroundColor: `var(--${challenge.color})` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Leaderboard */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Ranking Semanal</h2>
          
          <div className="bg-white dark:bg-slate-900/80 rounded-xl shadow-card overflow-hidden">
            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 flex justify-between items-center">
              <span className="font-medium">Top Corredores</span>
              <span className="text-sm text-slate-500">Distância (km)</span>
            </div>
            
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {leaderboard.map((user, index) => (
                <div key={index} className="p-4 flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 flex items-center justify-center">
                      {user.rank === 1 ? (
                        <span className="text-amber-400 text-xl">🥇</span>
                      ) : user.rank === 2 ? (
                        <span className="text-slate-400 text-xl">🥈</span>
                      ) : user.rank === 3 ? (
                        <span className="text-amber-700 text-xl">🥉</span>
                      ) : (
                        <span className="text-slate-500">{user.rank}</span>
                      )}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pace-blue/20 to-pace-green/20 flex items-center justify-center">
                      {user.avatar}
                    </div>
                    <span className="font-medium text-sm">{user.name}</span>
                  </div>
                  <span className="font-bold">{user.distance}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-4 py-3 flex justify-between">
          <a href="/dashboard" className="flex flex-col items-center text-slate-500">
            <Map size={24} />
            <span className="text-xs mt-1">Correr</span>
          </a>
          <a href="/challenges" className="flex flex-col items-center text-pace-blue">
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

export default Challenges;
