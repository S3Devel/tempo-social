
import React from 'react';
import { Trophy } from 'lucide-react';
import { User } from '../search/UserCard';
import { Button } from '@/components/ui/button';

type RankingListProps = {
  users: User[];
  onFollow: (userId: number) => void;
};

const RankingList = ({ users, onFollow }: RankingListProps) => {
  const getMedalColor = (position: number) => {
    switch (position) {
      case 1:
        return 'text-amber-500';
      case 2:
        return 'text-slate-400';
      case 3:
        return 'text-amber-700';
      default:
        return 'text-slate-500';
    }
  };

  return (
    <div className="space-y-3">
      {users.map((user, index) => (
        <div key={user.id} className="bg-white dark:bg-slate-900/80 rounded-xl shadow-sm p-4 flex items-center space-x-4">
          <div className={`w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-semibold ${getMedalColor(index + 1)}`}>
            {index < 3 ? <Trophy size={16} /> : index + 1}
          </div>
          
          <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xl overflow-hidden">
            {user.avatar.startsWith('http') ? (
              <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
            ) : (
              user.avatar
            )}
          </div>
          
          <div className="flex-1">
            <h3 className="font-medium text-sm">{user.name}</h3>
            <p className="text-xs text-slate-500">{user.username}</p>
          </div>
          
          <div className="text-right">
            <p className="font-bold text-pace-blue">248 km</p>
            <p className="text-xs text-slate-500">este mês</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RankingList;
