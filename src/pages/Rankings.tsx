import React, { useState } from 'react';
import { ArrowLeft, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import RankingTabs from '@/components/rankings/RankingTabs';
import { User } from '@/components/search/UserCard';

// Dados simulados
const mockLocalUsers: User[] = [
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

const mockGroupUsers: User[] = [
  {
    id: 6,
    name: 'Ricardo Gomes',
    username: '@ricardogomes',
    avatar: '👨‍🦱',
    bio: 'Entusiasta de corridas de rua',
    isFollowing: true
  },
  {
    id: 7,
    name: 'Fernanda Lima',
    username: '@fernandalima',
    avatar: '👱‍♀️',
    bio: 'Corredora iniciante, amante de 5k',
    isFollowing: true
  },
  {
    id: 1,
    name: 'Ana Souza',
    username: '@anasouza',
    avatar: '👩',
    bio: 'Corredora de longas distâncias. Amo maratonas!',
    isFollowing: true
  },
  {
    id: 8,
    name: 'Paulo Mendes',
    username: '@paulomendes',
    avatar: '👴',
    bio: 'Corredor veterano, 10 maratonas concluídas',
    isFollowing: false
  }
];

const mockNationalUsers: User[] = [
  {
    id: 9,
    name: 'Daniel Oliveira',
    username: '@danieloliveira',
    avatar: '🧑',
    bio: 'Ultramaratonista profissional',
    isFollowing: false
  },
  {
    id: 10,
    name: 'Luísa Pereira',
    username: '@luisapereira',
    avatar: '👩‍🦳',
    bio: 'Recordista nacional de 10k',
    isFollowing: false
  },
  {
    id: 11,
    name: 'Roberto Carlos',
    username: '@robertocarlos',
    avatar: '👨‍🦲',
    bio: 'Treinador e atleta',
    isFollowing: true
  },
  {
    id: 12,
    name: 'Juliana Castro',
    username: '@julianacastro',
    avatar: '👩‍🦱',
    bio: 'Especialista em corridas de montanha',
    isFollowing: false
  },
  {
    id: 13,
    name: 'André Santos',
    username: '@andresantos',
    avatar: '🧔‍♂️',
    bio: 'Maratonista com foco em performance',
    isFollowing: false
  }
];

const Rankings = () => {
  const navigate = useNavigate();
  const [localRanking, setLocalRanking] = useState<User[]>(mockLocalUsers);
  const [groupRanking, setGroupRanking] = useState<User[]>(mockGroupUsers);
  const [nationalRanking, setNationalRanking] = useState<User[]>(mockNationalUsers);
  
  const handleFollow = (userId: number) => {
    // Atualiza o status de seguir em todos os rankings
    setLocalRanking(prevUsers => 
      prevUsers.map(user => 
        user.id === userId ? { ...user, isFollowing: !user.isFollowing } : user
      )
    );
    
    setGroupRanking(prevUsers => 
      prevUsers.map(user => 
        user.id === userId ? { ...user, isFollowing: !user.isFollowing } : user
      )
    );
    
    setNationalRanking(prevUsers => 
      prevUsers.map(user => 
        user.id === userId ? { ...user, isFollowing: !user.isFollowing } : user
      )
    );
  };
  
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
      <div className="container mx-auto px-4 py-6">
        {/* Barra de navegação superior */}
        <div className="flex items-center mb-6">
          <button 
            onClick={() => navigate(-1)} 
            className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center mr-3"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-bold">Rankings</h1>
        </div>
        
        {/* Abas de rankings */}
        <RankingTabs 
          localRanking={localRanking}
          groupRanking={groupRanking}
          nationalRanking={nationalRanking}
          onFollow={handleFollow}
        />
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

export default Rankings;
