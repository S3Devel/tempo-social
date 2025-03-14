
import React, { useState } from 'react';
import { Map, Trophy, Users, MessageSquare } from 'lucide-react';
import FeedHeader from '@/components/feed/FeedHeader';
import PostsList from '@/components/feed/PostsList';
import AddPostModal from '@/components/profile/AddPostModal';
import { Post } from '@/types/Post';

// Dados simulados para o feed
const mockPosts: Post[] = [
  {
    id: '1',
    userId: '1',
    username: 'Carlos Silva',
    userAvatar: '🏃',
    caption: 'Corrida matinal no parque. Sensação incrível!',
    imageUrl: 'https://placehold.co/600x400?text=Corrida+Matinal',
    likes: 24,
    liked: false,
    comments: [
      {
        id: 'c1',
        userId: '2',
        username: 'Marina Santos',
        avatar: '🏃‍♀️',
        text: 'Muito bom! Qual foi a distância?',
        createdAt: '2023-08-12T08:30:00Z'
      }
    ],
    createdAt: '2023-08-12T07:30:00Z',
    location: 'Parque Ibirapuera, São Paulo'
  },
  {
    id: '2',
    userId: '2',
    username: 'Marina Santos',
    userAvatar: '🏃‍♀️',
    caption: 'Completei minha primeira meia maratona! Muito orgulho dessa conquista. 21km em 1h52m.',
    imageUrl: 'https://placehold.co/600x400?text=Meia+Maratona',
    likes: 42,
    liked: true,
    comments: [
      {
        id: 'c2',
        userId: '1',
        username: 'Carlos Silva',
        avatar: '🏃',
        text: 'Parabéns! Resultado incrível!',
        createdAt: '2023-08-10T16:45:00Z'
      },
      {
        id: 'c3',
        userId: '3',
        username: 'Rafael Mendes',
        avatar: '🏃‍♂️',
        text: 'Inspirador! Qual será o próximo desafio?',
        createdAt: '2023-08-10T17:30:00Z'
      }
    ],
    createdAt: '2023-08-10T15:20:00Z',
    location: 'Maratona de São Paulo'
  },
  {
    id: '3',
    userId: '3',
    username: 'Rafael Mendes',
    userAvatar: '🏃‍♂️',
    caption: 'Novo tênis para os treinos! Agora é foco total para a maratona do próximo mês.',
    imageUrl: 'https://placehold.co/600x400?text=Novo+Tênis',
    likes: 18,
    liked: false,
    comments: [],
    createdAt: '2023-08-08T19:15:00Z'
  }
];

const Feed = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [posts, setPosts] = useState(mockPosts);
  
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
      <div className="container mx-auto px-4 py-6">
        <FeedHeader onAddPostClick={() => setIsAddModalOpen(true)} />
        
        <PostsList posts={posts} />
        
        {/* Modal para adicionar post */}
        <AddPostModal 
          isOpen={isAddModalOpen} 
          onClose={() => setIsAddModalOpen(false)} 
        />
        
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
          <a href="/feed" className="flex flex-col items-center text-pace-blue">
            <MessageSquare size={24} />
            <span className="text-xs mt-1">Feed</span>
          </a>
          <a href="/community" className="flex flex-col items-center text-slate-500">
            <Users size={24} />
            <span className="text-xs mt-1">Comunidade</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Feed;
