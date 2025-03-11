
import React from 'react';

const ChallengesList = () => {
  const challenges = [
    {
      title: 'Distância Semanal',
      emoji: '🏃',
      color: 'bg-pace-blue/10 text-pace-blue',
      bg: 'bg-pace-blue/20',
      progress: 82,
      current: '24.8',
      target: '30',
      unit: 'km'
    },
    {
      title: 'Desafio Calórico',
      emoji: '🔥',
      color: 'bg-pace-green/10 text-pace-green',
      bg: 'bg-pace-green/20',
      progress: 73,
      current: '1,465',
      target: '2,000',
      unit: 'cal'
    },
    {
      title: 'Sequência de Corridas',
      emoji: '⚡',
      color: 'bg-purple-500/10 text-purple-500',
      bg: 'bg-purple-500/20',
      progress: 60,
      current: '3',
      target: '5',
      unit: 'dias'
    }
  ];
  
  return (
    <div className="space-y-4">
      {challenges.map((challenge, index) => (
        <div key={index} className="bg-white dark:bg-slate-900/80 rounded-xl shadow-card overflow-hidden transition-all duration-300 hover:shadow-card-hover">
          <div className={`${challenge.color} px-4 py-3 flex justify-between items-center`}>
            <h3 className="text-base font-bold">{challenge.title}</h3>
            <div className={`w-8 h-8 rounded-full ${challenge.bg} flex items-center justify-center`}>
              {challenge.emoji}
            </div>
          </div>
          
          <div className="px-4 py-3">
            <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">
              {challenge.title === 'Distância Semanal' 
                ? 'Corra pelo menos 30km esta semana para ganhar a medalha de Corredor Prata.'
                : challenge.title === 'Desafio Calórico'
                ? 'Queime 2,000 calorias através de corridas para completar este desafio.'
                : 'Corra pelo menos 3km por 5 dias consecutivos para ganhar o distintivo de Consistência.'}
            </p>
            
            <div className="mb-1 flex justify-between items-center">
              <span className="text-xs font-medium text-slate-500">{challenge.current} / {challenge.target} {challenge.unit}</span>
              <span className="text-xs font-medium" style={{ color: `var(--${challenge.color.split('-')[1]})` }}>{challenge.progress}%</span>
            </div>
            
            <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${challenge.progress}%`, backgroundColor: `var(--${challenge.color.split('-')[1]})` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChallengesList;
