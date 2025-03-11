
import React from 'react';
import { Map, Trophy, Users, Dumbbell, Calendar, Play, Clock, BarChart } from 'lucide-react';

const Training = () => {
  const nextWorkout = {
    title: 'Treino Intervalado',
    day: 'Hoje',
    time: '17:30',
    duration: '45 min',
    description: 'Corrida de 5km com intervalos de alta intensidade'
  };
  
  const trainingSessions = [
    {
      day: 'Seg',
      workout: 'Corrida Lenta',
      distance: 5,
      completed: true
    },
    {
      day: 'Ter',
      workout: 'Descanso',
      distance: 0,
      completed: true
    },
    {
      day: 'Qua',
      workout: 'Treino Intervalado',
      distance: 5,
      completed: false,
      today: true
    },
    {
      day: 'Qui',
      workout: 'Corrida Lenta',
      distance: 6,
      completed: false
    },
    {
      day: 'Sex',
      workout: 'Treino de Força',
      distance: 0,
      completed: false
    },
    {
      day: 'Sáb',
      workout: 'Corrida Longa',
      distance: 10,
      completed: false
    },
    {
      day: 'Dom',
      workout: 'Descanso',
      distance: 0,
      completed: false
    }
  ];
  
  const trainingPlans = [
    {
      title: '5K para Iniciantes',
      duration: '8 semanas',
      difficulty: 'Iniciante',
      icon: '🌱',
      color: 'bg-pace-green/10 text-pace-green'
    },
    {
      title: 'Preparo para 10K',
      duration: '10 semanas',
      difficulty: 'Intermediário',
      icon: '⚡',
      color: 'bg-pace-blue/10 text-pace-blue'
    },
    {
      title: 'Meia Maratona',
      duration: '12 semanas',
      difficulty: 'Avançado',
      icon: '🏆',
      color: 'bg-purple-500/10 text-purple-500'
    },
    {
      title: 'Maratona',
      duration: '16 semanas',
      difficulty: 'Avançado',
      icon: '🏅',
      color: 'bg-amber-500/10 text-amber-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 py-6 pb-20">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Treinos</h1>
          <div className="flex space-x-2">
            <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
              <Calendar size={20} />
            </button>
            <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
              <BarChart size={20} />
            </button>
          </div>
        </div>
        
        {/* Next Workout */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Próximo Treino</h2>
          
          <div className="bg-white dark:bg-slate-900/80 rounded-xl shadow-card p-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-xl">{nextWorkout.title}</h3>
              <div className="bg-pace-blue/10 text-pace-blue text-sm font-medium px-3 py-1 rounded-full">
                {nextWorkout.day} • {nextWorkout.time}
              </div>
            </div>
            
            <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
              {nextWorkout.description}
            </p>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-pace-blue/10 flex items-center justify-center text-pace-blue">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Duração</div>
                  <div className="font-medium">{nextWorkout.duration}</div>
                </div>
              </div>
              
              <button className="flex items-center space-x-2 bg-pace-blue text-white px-4 py-2 rounded-lg">
                <Play size={18} />
                <span>Iniciar</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Weekly Plan */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Plano Semanal</h2>
          
          <div className="bg-white dark:bg-slate-900/80 rounded-xl shadow-card overflow-hidden">
            <div className="flex overflow-x-auto scrollbar-hide p-4 space-x-3">
              {trainingSessions.map((session, index) => (
                <div 
                  key={index} 
                  className={`flex-shrink-0 w-16 h-24 rounded-xl flex flex-col items-center justify-center p-2 ${
                    session.today ? 'bg-pace-blue/10 border border-pace-blue' : 
                    session.completed ? 'bg-slate-100 dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-900'
                  }`}
                >
                  <span className={`text-sm font-bold ${session.today ? 'text-pace-blue' : ''}`}>
                    {session.day}
                  </span>
                  {session.completed ? (
                    <div className="w-8 h-8 rounded-full bg-pace-green/20 text-pace-green flex items-center justify-center mt-1">
                      ✓
                    </div>
                  ) : session.distance > 0 ? (
                    <div className="text-xs text-slate-500 mt-2">
                      {session.distance} km
                    </div>
                  ) : (
                    <div className="text-xs text-slate-500 mt-2">
                      Descanso
                    </div>
                  )}
                  <span className="text-xs text-slate-500 mt-1 truncate max-w-full">
                    {session.workout}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Training Plans */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Planos de Treino</h2>
            <button className="text-pace-blue text-sm">Ver todos</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trainingPlans.map((plan, index) => (
              <div key={index} className="bg-white dark:bg-slate-900/80 rounded-xl shadow-card p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className={`w-10 h-10 rounded-full ${plan.color} flex items-center justify-center text-lg`}>
                    {plan.icon}
                  </div>
                  <div>
                    <h3 className="font-medium">{plan.title}</h3>
                    <p className="text-xs text-slate-500">{plan.duration} • {plan.difficulty}</p>
                  </div>
                </div>
                
                <div className="mt-3 flex justify-end">
                  <button className="text-pace-blue text-sm font-medium">Ver detalhes</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-4 py-3 flex justify-between">
          <a href="/dashboard" className="flex flex-col items-center text-slate-500">
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
          <a href="/training" className="flex flex-col items-center text-pace-blue">
            <Dumbbell size={24} />
            <span className="text-xs mt-1">Treinos</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Training;
