
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import RankingList from './RankingList';
import { User } from '../search/UserCard';

type RankingTabsProps = {
  localRanking: User[];
  groupRanking: User[];
  nationalRanking: User[];
  onFollow: (userId: number) => void;
};

const RankingTabs = ({ localRanking, groupRanking, nationalRanking, onFollow }: RankingTabsProps) => {
  return (
    <Tabs defaultValue="local">
      <TabsList className="grid grid-cols-3 mb-4">
        <TabsTrigger value="local">Local</TabsTrigger>
        <TabsTrigger value="group">Grupo</TabsTrigger>
        <TabsTrigger value="national">Nacional</TabsTrigger>
      </TabsList>
      
      <TabsContent value="local">
        <RankingList users={localRanking} onFollow={onFollow} />
      </TabsContent>
      
      <TabsContent value="group">
        <RankingList users={groupRanking} onFollow={onFollow} />
      </TabsContent>
      
      <TabsContent value="national">
        <RankingList users={nationalRanking} onFollow={onFollow} />
      </TabsContent>
    </Tabs>
  );
};

export default RankingTabs;
