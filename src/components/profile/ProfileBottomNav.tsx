
import React from 'react';
import { Map, Trophy, Users, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProfileBottomNav = () => {
  const navigate = useNavigate();
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-4 py-3 flex justify-between">
      <a href="/dashboard" className="flex flex-col items-center text-slate-500">
        <Map size={24} />
        <span className="text-xs mt-1">Correr</span>
      </a>
      <a href="/challenges" className="flex flex-col items-center text-slate-500">
        <Trophy size={24} />
        <span className="text-xs mt-1">Desafios</span>
      </a>
      <a href="/feed" className="flex flex-col items-center text-slate-500">
        <MessageSquare size={24} />
        <span className="text-xs mt-1">Feed</span>
      </a>
      <a href="/community" className="flex flex-col items-center text-slate-500">
        <Users size={24} />
        <span className="text-xs mt-1">Comunidade</span>
      </a>
    </div>
  );
};

export default ProfileBottomNav;
