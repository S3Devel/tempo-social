
import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import { Input } from '@/components/ui/input';

type ProfileHeaderProps = {
  user: {
    name: string;
    username: string;
    avatar: string;
    coverGradient: string;
  };
  isEditing: boolean;
  onUpdateUser: (updatedUser: Partial<ProfileHeaderProps['user']>) => void;
};

const ProfileHeader = ({ user, isEditing, onUpdateUser }: ProfileHeaderProps) => {
  return (
    <div className="mb-6 relative">
      {/* Capa do perfil */}
      <div className={`${user.coverGradient} h-40 rounded-xl mb-6 relative overflow-hidden`}>
        {isEditing && (
          <button className="absolute right-3 bottom-3 bg-white/80 dark:bg-slate-800/80 p-2 rounded-full">
            <Camera size={20} />
          </button>
        )}
      </div>
      
      {/* Avatar - Agora centralizado e acima da biografia */}
      <div className="flex flex-col items-center mb-4">
        <div className="w-24 h-24 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-4xl relative mb-3">
          {user.avatar}
          {isEditing && (
            <button className="absolute right-0 bottom-0 bg-pace-blue p-2 rounded-full shadow-md">
              <Camera size={16} className="text-white" />
            </button>
          )}
        </div>
        
        {/* Nome e username */}
        {isEditing ? (
          <div className="space-y-2 w-full max-w-xs">
            <Input
              value={user.name}
              onChange={(e) => onUpdateUser({ name: e.target.value })}
              className="text-center font-bold text-xl"
              placeholder="Nome"
            />
            <Input
              value={user.username}
              onChange={(e) => onUpdateUser({ username: e.target.value })}
              className="text-center text-slate-500"
              placeholder="@username"
            />
          </div>
        ) : (
          <>
            <h1 className="text-xl font-bold">{user.name}</h1>
            <p className="text-slate-500">{user.username}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileHeader;
