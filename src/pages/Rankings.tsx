
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapIcon, Trophy, Users, Dumbbell } from 'lucide-react';
import RankingTabs from '@/components/rankings/RankingTabs';
import { User } from '@/components/search/UserCard';
import { toast } from '@/components/ui/use-toast';

// Dados simulados para os rankings
const localRankingData: User[] = [
  {
    id: 1,
    name: 'Ana Silva',
    username: '@anasilva',
    avatar: '👩',
    bio: 'Corredora amadora, 5km diários',
    stats: {distance: '423km', runs: 42},
    isFollowing: false
  },
  {
    id: 2,
    name: 'Pedro Costa',
    username: '@pedrocosta',
    avatar: '👨',
    bio: 'Maratonista, amo corrida matinal!',
    stats: {distance: '386km', runs: 31},
    isFollowing: true
  },
  {
    id: 3,
    name: 'Marina Oliveira',
    username: '@marinaoliveira',
    avatar: '👧',
    bio: 'Correndo todos os dias no parque',
    stats: {distance: '352km', runs: 35},
    isFollowing: false
  },
  {
    id: 4,
    name: 'Ricardo Gomes',
    username: '@ricardogomes',
    avatar: '👨‍🦰',
    bio: 'Preparando para minha primeira maratona',
    stats: {distance: '320km', runs: 28},
    isFollowing: false
  },
  {
    id: 5,
    name: 'Juliana Mendes',
    username: '@julianamendes',
    avatar: '👩‍🦱',
    bio: 'Corrida é vida! 10km por dia',
    stats: {distance: '304km', runs: 29},
    isFollowing: true
  }
];

const groupRankingData: User[] = [
  {
    id: 6,
    name: 'Fernando Lima',
    username: '@fernandolima',
    avatar: '🧔',
    bio: 'Líder do grupo Corredores SP',
    stats: {distance: '520km', runs: 52},
    isFollowing: true
  },
  {
    id: 7,
    name: 'Camila Santos',
    username: '@camilasantos',
    avatar: '👩‍🦰',
    bio: 'Corrida na praia todas as manhãs',
    stats: {distance: '486km', runs: 43},
    isFollowing: false
  },
  {
    id: 8,
    name: 'Gabriel Rocha',
    username: '@gabrielrocha',
    avatar: '👨‍🦱',
    bio: 'Ultramaratonista em treinamento',
    stats: {distance: '455km', runs: 38},
    isFollowing: true
  },
  {
    id: 1,
    name: 'Ana Silva',
    username: '@anasilva',
    avatar: '👩',
    bio: 'Corredora amadora, 5km diários',
    stats: {distance: '423km', runs: 42},
    isFollowing: false
  },
  {
    id: 2,
    name: 'Pedro Costa',
    username: '@pedrocosta',
    avatar: '👨',
    bio: 'Maratonista, amo corrida matinal!',
    stats: {distance: '386km', runs: 31},
    isFollowing: true
  }
];

const nationalRankingData: User[] = [
  {
    id: 9,
    name: 'Roberto Alves',
    username: '@robertoalves',
    avatar: '👨‍🦳',
    bio: 'Campeão nacional de maratona 2022',
    stats: {distance: '982km', runs: 87},
    isFollowing: false
  },
  {
    id: 10,
    name: 'Larissa Ferreira',
    username: '@larissaferreira',
    avatar: '👱‍♀️',
    bio: 'Atleta profissional, 21km diários',
    stats: {distance: '923km', runs: 79},
    isFollowing: false
  },
  {
    id: 11,
    name: 'Marcelo Dias',
    username: '@marcelodias',
    avatar: '🧔‍♂️',
    bio: 'Instrutor de corrida, amante de trilhas',
    stats: {distance: '876km', runs: 72},
    isFollowing: true
  },
  {
    id: 12,
    name: 'Sofia Campos',
    username: '@sofiacampos',
    avatar: '👩‍🦱',
    bio: 'Ultramaratonista, 100km por semana',
    stats: {distance: '854km', runs: 68},
    isFollowing: false
  },
  {
    id: 6,
    name: 'Fernando Lima',
    username: '@fernandolima',
    avatar: '🧔',
    bio: 'Líder do grupo Corredores SP',
    stats: {distance: '820km', runs: 65},
    isFollowing: true
  }
];

const Rankings = () => {
  const navigate = useNavigate();
  const [localRanking, setLocalRanking] = useState<User[]>(localRankingData);
  const [groupRanking, setGroupRanking] = useState<User[]>(groupRankingData);
  const [nationalRanking, setNationalRanking] = useState<User[]>(nationalRankingData);
  
  const handleFollow = (userId: number) => {
    // Atualizar o estado de "seguindo" para o usuário
    // Em um app real, isso seria feito com uma chamada API
    
    // Atualizar ranking local
    setLocalRanking(prevRanking => 
      prevRanking.map(user => 
        user.id === userId ? {...user, isFollowing: !user.isFollowing} : user
      )
    );
    
    // Atualizar ranking de grupo
    setGroupRanking(prevRanking => 
      prevRanking.map(user => 
        user.id === userId ? {...user, isFollowing: !user.isFollowing} : user
      )
    );
    
    // Atualizar ranking nacional
    setNationalRanking(prevRanking => 
      prevRanking.map(user => 
        user.id === userId ? {...user, isFollowing: !user.isFollowing} : user
      )
    );
    
    // Mostrar notificação
    const user = [...localRanking, ...groupRanking, ...nationalRanking]
      .find(u => u.id === userId);
    
    if (user) {
      const isNowFollowing = !user.isFollowing;
      toast({
        title: isNowFollowing ? `Seguindo ${user.name}` : `Deixou de seguir ${user.name}`,
        description: isNowFollowing 
          ? `Agora você verá as atualizações de ${user.name} no seu feed.` 
          : `Você não verá mais as atualizações de ${user.name} no seu feed.`,
      });
    }
  };
  
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pb-20">
      <div className="container mx-auto px-4 py-6">
        {/* Barra de navegação superior */}
        <div className="flex justify-between items-center mb-6">
          <button 
            onClick={() => navigate(-1)} 
            className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-bold">Rankings</h1>
          <div className="w-10"></div> {/* Espaçador para centralizar o título */}
        </div>
        
        {/* Conteúdo principal */}
        <RankingTabs 
          localRanking={localRanking}
          groupRanking={groupRanking}
          nationalRanking={nationalRanking}
          onFollow={handleFollow}
        />
        
        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-4 py-3 flex justify-between">
          <a href="/dashboard" className="flex flex-col items-center text-slate-500">
            <MapIcon size={24} />
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
    </div>
  );
};

export default Rankings;
