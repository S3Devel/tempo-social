
import React, { useState } from 'react';
import { Crown, MapPin, Users, Flag } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import RankingTabs from '@/components/rankings/RankingTabs';
import RankingList from '@/components/rankings/RankingList';
import { User } from '@/types/User';

// Dados simulados para os rankings
const localUsers: User[] = [
  {
    id: '1',
    name: 'Carlos Silva',
    username: '@carlossilva',
    avatar: '👨',
    location: 'São Paulo, SP',
    stats: {
      distance: 128.5,
      pace: 5.2,
      runs: 24
    }
  },
  {
    id: '2',
    name: 'Maria Santos',
    username: '@mariasantos',
    avatar: '👩',
    location: 'São Paulo, SP',
    stats: {
      distance: 115.2,
      pace: 5.5,
      runs: 20
    }
  },
  {
    id: '3',
    name: 'João Oliveira',
    username: '@joaooliveira',
    avatar: '👨‍🦱',
    location: 'São Paulo, SP',
    stats: {
      distance: 98.7,
      pace: 5.8,
      runs: 18
    }
  },
  {
    id: '4',
    name: 'Ana Souza',
    username: '@anasouza',
    avatar: '👩‍🦰',
    location: 'São Paulo, SP',
    stats: {
      distance: 87.3,
      pace: 6.0,
      runs: 16
    }
  },
  {
    id: '5',
    name: 'Pedro Costa',
    username: '@pedrocosta',
    avatar: '👱‍♂️',
    location: 'São Paulo, SP',
    stats: {
      distance: 76.8,
      pace: 6.2,
      runs: 14
    }
  }
];

const groupUsers: User[] = [
  {
    id: '1',
    name: 'Carlos Silva',
    username: '@carlossilva',
    avatar: '👨',
    location: 'São Paulo, SP',
    stats: {
      distance: 128.5,
      pace: 5.2,
      runs: 24
    }
  },
  {
    id: '6',
    name: 'Fernanda Lima',
    username: '@fernandalima',
    avatar: '👩‍🦱',
    location: 'Rio de Janeiro, RJ',
    stats: {
      distance: 110.3,
      pace: 5.6,
      runs: 19
    }
  },
  {
    id: '7',
    name: 'Ricardo Mendes',
    username: '@ricardomendes',
    avatar: '🧔',
    location: 'Brasília, DF',
    stats: {
      distance: 95.1,
      pace: 5.9,
      runs: 17
    }
  },
  {
    id: '8',
    name: 'Juliana Martins',
    username: '@julianamartins',
    avatar: '👱‍♀️',
    location: 'Curitiba, PR',
    stats: {
      distance: 85.7,
      pace: 6.1,
      runs: 15
    }
  },
  {
    id: '9',
    name: 'Lucas Almeida',
    username: '@lucasalmeida',
    avatar: '👨‍🦲',
    location: 'Belo Horizonte, MG',
    stats: {
      distance: 73.4,
      pace: 6.3,
      runs: 13
    }
  }
];

const nationalUsers: User[] = [
  {
    id: '10',
    name: 'Gabriel Santos',
    username: '@gabrielsantos',
    avatar: '👨‍🦰',
    location: 'São Paulo, SP',
    stats: {
      distance: 152.7,
      pace: 4.8,
      runs: 28
    }
  },
  {
    id: '11',
    name: 'Camila Costa',
    username: '@camilacosta',
    avatar: '👩‍🦱',
    location: 'Rio de Janeiro, RJ',
    stats: {
      distance: 145.2,
      pace: 5.0,
      runs: 26
    }
  },
  {
    id: '12',
    name: 'Thiago Oliveira',
    username: '@thiagooliveira',
    avatar: '🧔‍♂️',
    location: 'Salvador, BA',
    stats: {
      distance: 138.6,
      pace: 5.1,
      runs: 25
    }
  },
  {
    id: '13',
    name: 'Bianca Silva',
    username: '@biancasilva',
    avatar: '👩',
    location: 'Fortaleza, CE',
    stats: {
      distance: 132.1,
      pace: 5.2,
      runs: 24
    }
  },
  {
    id: '14',
    name: 'Rafael Martins',
    username: '@rafaelmartins',
    avatar: '👨',
    location: 'Porto Alegre, RS',
    stats: {
      distance: 128.9,
      pace: 5.3,
      runs: 23
    }
  }
];

const Rankings = () => {
  const [activeTab, setActiveTab] = useState('local');

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pb-20">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Rankings</h1>

        {/* Tabs para os diferentes tipos de ranking */}
        <RankingTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Conteúdo das abas */}
        <TabsContent value="local" className="mt-4">
          <div className="flex items-center mb-4 text-slate-600">
            <MapPin size={20} className="mr-2" />
            <span>São Paulo, SP</span>
          </div>
          <RankingList users={localUsers} />
        </TabsContent>

        <TabsContent value="group" className="mt-4">
          <div className="flex items-center mb-4 text-slate-600">
            <Users size={20} className="mr-2" />
            <span>Grupo: Corredores de SP</span>
          </div>
          <RankingList users={groupUsers} />
        </TabsContent>

        <TabsContent value="national" className="mt-4">
          <div className="flex items-center mb-4 text-slate-600">
            <Flag size={20} className="mr-2" />
            <span>Brasil</span>
          </div>
          <RankingList users={nationalUsers} />
        </TabsContent>
      </div>
    </div>
  );
};

export default Rankings;
