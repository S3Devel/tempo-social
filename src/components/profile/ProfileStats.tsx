
import React from 'react';

type ProfileStatsProps = {
  stats: {
    following: number;
    followers: number;
    runs: number;
  };
};

const ProfileStats = ({ stats }: ProfileStatsProps) => {
  return (
    <div className="flex justify-around bg-white dark:bg-slate-900/80 rounded-xl shadow-sm p-4 mb-6">
      <div className="text-center">
        <div className="text-lg font-bold">{stats.following}</div>
        <div className="text-sm text-slate-500">Seguindo</div>
      </div>
      <div className="text-center">
        <div className="text-lg font-bold">{stats.followers}</div>
        <div className="text-sm text-slate-500">Seguidores</div>
      </div>
      <div className="text-center">
        <div className="text-lg font-bold">{stats.runs}</div>
        <div className="text-sm text-slate-500">Corridas</div>
      </div>
    </div>
  );
};

export default ProfileStats;
