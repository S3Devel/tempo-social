
import React from 'react';

type Achievement = {
  id: number;
  type: 'medal' | 'distance' | 'streak';
  title: string;
  date: string;
  details: string;
  icon: string;
};

type AchievementsListProps = {
  achievements: Achievement[];
};

const AchievementsList = ({ achievements }: AchievementsListProps) => {
  return (
    <div className="space-y-3">
      {achievements.map((achievement) => (
        <div
          key={achievement.id}
          className="bg-white dark:bg-slate-900/80 rounded-xl shadow-sm p-4 flex items-center space-x-4"
        >
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-300 to-orange-500 flex items-center justify-center text-2xl">
            {achievement.icon}
          </div>
          <div className="flex-1">
            <h3 className="font-medium">{achievement.title}</h3>
            <p className="text-xs text-slate-500">{achievement.details}</p>
            <p className="text-xs text-slate-400">{achievement.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AchievementsList;
