
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import RankingList from './RankingList';
import { User } from '@/types/User';

export interface RankingTabsProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

// Dados simulados para rankings (em uma aplicação real, viriam de uma API)
const distanceRanking: User[] = [
  { id: '1', name: 'Carlos Silva', username: '@carlossilva', avatar: '🏃', stats: { distance: 120.5, pace: 5.3, runs: 35 } },
  { id: '2', name: 'Marina Santos', username: '@marinasantos', avatar: '🏃‍♀️', stats: { distance: 115.2, pace: 4.8, runs: 42 } },
  { id: '3', name: 'Rafael Mendes', username: '@rafamendes', avatar: '🏃‍♂️', stats: { distance: 98.7, pace: 5.0, runs: 28 } },
  { id: '4', name: 'Juliana Costa', username: '@jucosta', avatar: '🏃‍♀️', stats: { distance: 95.3, pace: 5.5, runs: 30 } },
  { id: '5', name: 'Fernando Oliveira', username: '@feroliveira', avatar: '🏃‍♂️', stats: { distance: 92.1, pace: 4.9, runs: 25 } },
];

const paceRanking: User[] = [
  { id: '1', name: 'Marina Santos', username: '@marinasantos', avatar: '🏃‍♀️', stats: { distance: 115.2, pace: 4.8, runs: 42 } },
  { id: '2', name: 'Fernando Oliveira', username: '@feroliveira', avatar: '🏃‍♂️', stats: { distance: 92.1, pace: 4.9, runs: 25 } },
  { id: '3', name: 'Rafael Mendes', username: '@rafamendes', avatar: '🏃‍♂️', stats: { distance: 98.7, pace: 5.0, runs: 28 } },
  { id: '4', name: 'Carlos Silva', username: '@carlossilva', avatar: '🏃', stats: { distance: 120.5, pace: 5.3, runs: 35 } },
  { id: '5', name: 'Juliana Costa', username: '@jucosta', avatar: '🏃‍♀️', stats: { distance: 95.3, pace: 5.5, runs: 30 } },
];

const runsRanking: User[] = [
  { id: '1', name: 'Marina Santos', username: '@marinasantos', avatar: '🏃‍♀️', stats: { distance: 115.2, pace: 4.8, runs: 42 } },
  { id: '2', name: 'Carlos Silva', username: '@carlossilva', avatar: '🏃', stats: { distance: 120.5, pace: 5.3, runs: 35 } },
  { id: '3', name: 'Juliana Costa', username: '@jucosta', avatar: '🏃‍♀️', stats: { distance: 95.3, pace: 5.5, runs: 30 } },
  { id: '4', name: 'Rafael Mendes', username: '@rafamendes', avatar: '🏃‍♂️', stats: { distance: 98.7, pace: 5.0, runs: 28 } },
  { id: '5', name: 'Fernando Oliveira', username: '@feroliveira', avatar: '🏃‍♂️', stats: { distance: 92.1, pace: 4.9, runs: 25 } },
];

const RankingTabs: React.FC<RankingTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid grid-cols-3 mb-6">
        <TabsTrigger value="distance">Distância</TabsTrigger>
        <TabsTrigger value="pace">Pace</TabsTrigger>
        <TabsTrigger value="runs">Corridas</TabsTrigger>
      </TabsList>
      
      <TabsContent value="distance">
        <RankingList 
          users={distanceRanking} 
          metric="distance" 
          unit="km" 
        />
      </TabsContent>
      
      <TabsContent value="pace">
        <RankingList 
          users={paceRanking} 
          metric="pace" 
          unit="min/km" 
        />
      </TabsContent>
      
      <TabsContent value="runs">
        <RankingList 
          users={runsRanking} 
          metric="runs" 
          unit="corridas" 
        />
      </TabsContent>
    </Tabs>
  );
};

export default RankingTabs;
