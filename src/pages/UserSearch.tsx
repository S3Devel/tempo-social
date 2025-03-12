import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import UserSearchBar from '@/components/search/UserSearchBar';
import UserCard, { User } from '@/components/search/UserCard';
import { Map, Trophy, Users, Dumbbell } from 'lucide-react';

// Dados simulados
const mockUsers: User[] = [
  {
    id: 1,
    name: 'Ana Souza',
    username: '@anasouza',
    avatar: '👩',
    bio: 'Corredora de longas distâncias. Amo maratonas!',
    isFollowing: true
  },
  {
    id: 2,
    name: 'Pedro Lima',
    username: '@pedrolima',
    avatar: '👨',
    bio: 'Corredor amador, 3 maratonas completas',
    isFollowing: false
  },
  {
    id: 3,
    name: 'Marina Costa',
    username: '@marinacosta',
    avatar: '👧',
    bio: 'Apaixonada por corridas de trilha e montanha',
    isFollowing: false
  },
  {
    id: 4,
    name: 'João Silva',
    username: '@joaosilva',
    avatar: '🧔',
    bio: 'Corredor de fim de semana',
    isFollowing: true
  },
  {
    id: 5,
    name: 'Camila Santos',
    username: '@camilasantos',
    avatar: '👩‍🦰',
    bio: 'Ultramaratonista em treinamento',
    isFollowing: false
  }
];

const UserSearch = () => {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState<User[]>(mockUsers);
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setSearchResults(mockUsers);
    } else {
      const filtered = mockUsers.filter(user => 
        user.name.toLowerCase().includes(query.toLowerCase()) || 
        user.username.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
    }
  };
  
  const handleFollow = (userId: number) => {
    setSearchResults(prevResults => 
      prevResults.map(user => 
        user.id === userId ? { ...user, isFollowing: !user.isFollowing } : user
      )
    );
  };
  
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
      <div className="container mx-auto px-4 py-6">
        {/* Barra de navegação superior */}
        <div className="flex items-center mb-4">
          <button 
            onClick={() => navigate(-1)} 
            className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center mr-3"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-bold">Buscar Corredores</h1>
        </div>
        
        {/* Barra de pesquisa */}
        <UserSearchBar onSearch={handleSearch} />
        
        {/* Resultados da pesquisa */}
        <div className="mt-4">
          {searchResults.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-slate-500">Nenhum corredor encontrado para "{searchQuery}"</p>
            </div>
          ) : (
            searchResults.map(user => (
              <UserCard 
                key={user.id} 
                user={user} 
                onFollow={handleFollow}
              />
            ))
          )}
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
        <a href="/training" className="flex flex-col items-center text-slate-500">
          <Dumbbell size={24} />
          <span className="text-xs mt-1">Treinos</span>
        </a>
      </div>
    </div>
  );
};

export default UserSearch;
