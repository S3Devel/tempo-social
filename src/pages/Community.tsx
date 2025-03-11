
import React from 'react';
import { Map, Trophy, Users, Dumbbell, MessageSquare, Heart, Share } from 'lucide-react';

const Community = () => {
  const posts = [
    {
      id: 1,
      user: {
        name: 'James Wilson',
        avatar: '👨',
        gradient: 'bg-gradient-to-br from-pace-blue to-cyan-500'
      },
      time: '2 horas atrás',
      content: 'Acabei de completar minha primeira meia maratona! 🎉 Muito orgulhoso do progresso que fiz com o PACE RUN. Obrigado a todos que me apoiaram nessa jornada!',
      achievement: {
        type: 'medal',
        title: 'Meia Maratona Completada',
        details: '21.1 km • 1:52:14'
      },
      likes: 48,
      comments: 12
    },
    {
      id: 2,
      user: {
        name: 'Sophia Chen',
        avatar: '👩',
        gradient: 'bg-gradient-to-br from-amber-400 to-orange-500'
      },
      time: 'Ontem',
      content: 'Corrida matinal com o grupo do nascer do sol! Alguém quer se juntar a nós amanhã no Parque Central? Estamos nos encontrando às 6:30 na entrada sul. #PaceRunCrew',
      achievement: {
        type: 'photo',
        emoji: '🌅'
      },
      likes: 32,
      comments: 8,
      liked: true
    }
  ];
  
  const groups = [
    { name: 'Maratonistas SP', members: 128, image: '🏙️' },
    { name: 'Corrida Trail', members: 86, image: '🌄' },
    { name: 'Iniciantes Unidos', members: 215, image: '🌱' },
    { name: 'Corrida Noturna', members: 73, image: '🌙' }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 py-6 pb-20">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Comunidade</h1>
          <div className="flex space-x-2">
            <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
              <MessageSquare size={20} />
            </button>
            <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
              <Users size={20} />
            </button>
          </div>
        </div>
        
        {/* Groups Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Grupos de Corrida</h2>
            <button className="text-pace-blue text-sm">Ver todos</button>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {groups.map((group, index) => (
              <div key={index} className="bg-white dark:bg-slate-900/80 rounded-xl shadow-card p-4">
                <div className="flex space-x-3 items-center">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pace-blue/20 to-pace-green/20 flex items-center justify-center text-2xl">
                    {group.image}
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">{group.name}</h3>
                    <p className="text-xs text-slate-500">{group.members} membros</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Feed Posts */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Feed da Comunidade</h2>
          
          <div className="space-y-6">
            {posts.map((post) => (
              <div key={post.id} className="bg-white dark:bg-slate-900/80 rounded-xl shadow-card p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`w-10 h-10 rounded-full ${post.user.gradient} flex items-center justify-center text-white`}>
                    {post.user.avatar}
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">{post.user.name}</h4>
                    <p className="text-xs text-slate-500">{post.time}</p>
                  </div>
                </div>
                
                <p className="text-sm mb-3">{post.content}</p>
                
                {post.achievement && (
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-xl h-40 mb-3 flex items-center justify-center relative overflow-hidden">
                    {post.achievement.type === 'medal' ? (
                      <div className="relative z-10 text-center">
                        <div className="text-4xl mb-2">🏅</div>
                        <div className="text-sm font-medium">{post.achievement.title}</div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">{post.achievement.details}</div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl">{post.achievement.emoji}</div>
                      </div>
                    )}
                  </div>
                )}
                
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <button className="flex items-center space-x-1">
                    <Heart size={16} className={post.liked ? "text-red-500 fill-red-500" : ""} />
                    <span>{post.likes} curtidas</span>
                  </button>
                  <button className="flex items-center space-x-1">
                    <MessageSquare size={16} />
                    <span>{post.comments} comentários</span>
                  </button>
                  <button className="flex items-center space-x-1">
                    <Share size={16} />
                    <span>Compartilhar</span>
                  </button>
                </div>
              </div>
            ))}
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
          <a href="/community" className="flex flex-col items-center text-pace-blue">
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

export default Community;
