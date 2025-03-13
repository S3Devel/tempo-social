
import React from 'react';
import { Trophy } from 'lucide-react';
import { User } from '@/types/User';

type RankingListProps = {
  users: User[];
};

const RankingList = ({ users }: RankingListProps) => {
  return (
    <div className="space-y-4">
      {users.map((user, index) => (
        <div key={user.id} className="flex items-center bg-white dark:bg-slate-900/80 p-4 rounded-xl shadow-sm">
          {/* Posição */}
          <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mr-4">
            {index < 3 ? (
              <Trophy className={`${index === 0 ? 'text-amber-500' : index === 1 ? 'text-gray-400' : 'text-amber-800'}`} size={20} />
            ) : (
              <span className="font-bold">{index + 1}</span>
            )}
          </div>
          
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center mr-4 text-xl">
            {user.avatar}
          </div>
          
          {/* Info */}
          <div className="flex-1">
            <div className="font-semibold">{user.name}</div>
            <div className="text-sm text-slate-500">{user.username}</div>
          </div>
          
          {/* Stats */}
          <div className="text-right">
            <div className="font-bold text-pace-blue">{user.stats?.distance} km</div>
            <div className="text-sm text-slate-500">{user.stats?.runs} corridas</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RankingList;
