
import React from 'react';
import { Check, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export type User = {
  id: number;
  name: string;
  username: string;
  avatar: string;
  bio: string;
  isFollowing: boolean;
};

type UserCardProps = {
  user: User;
  onFollow: (userId: number) => void;
};

const UserCard = ({ user, onFollow }: UserCardProps) => {
  return (
    <div className="bg-white dark:bg-slate-900/80 rounded-xl shadow-sm p-4 flex items-center space-x-4 mb-3">
      <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-2xl overflow-hidden">
        {user.avatar.startsWith('http') ? (
          <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
        ) : (
          user.avatar
        )}
      </div>
      
      <div className="flex-1">
        <h3 className="font-medium">{user.name}</h3>
        <p className="text-xs text-slate-500">{user.username}</p>
        <p className="text-xs text-slate-400 line-clamp-1">{user.bio}</p>
      </div>
      
      <Button
        onClick={() => onFollow(user.id)}
        variant={user.isFollowing ? "outline" : "default"}
        size="sm"
        className={user.isFollowing ? "border-pace-blue text-pace-blue" : "bg-pace-blue hover:bg-pace-blue/90"}
      >
        {user.isFollowing ? (
          <>
            <Check size={16} className="mr-1" /> Seguindo
          </>
        ) : (
          <>
            <Plus size={16} className="mr-1" /> Seguir
          </>
        )}
      </Button>
    </div>
  );
};

export default UserCard;
