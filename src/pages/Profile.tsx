
import React, { useState } from 'react';
import { ArrowLeft, Camera, Edit2, Map, Trophy, Users, Dumbbell, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileBio from '@/components/profile/ProfileBio';
import AchievementsList from '@/components/profile/AchievementsList';
import PhotoGrid from '@/components/profile/PhotoGrid';
import AddPostModal from '@/components/profile/AddPostModal';
import { useNavigate } from 'react-router-dom';

// Dados simulados do usuário
const userData = {
  name: 'Carlos Silva',
  username: '@carlossilva',
  avatar: '👨',
  coverGradient: 'bg-gradient-to-r from-pace-blue to-pace-green',
  bio: 'Corredor amador apaixonado por maratonas e trilhas. Tentando melhorar meu pace todos os dias!',
  location: 'São Paulo, Brasil',
  joinedDate: 'Membro desde Maio 2023',
  stats: {
    following: 124,
    followers: 89,
    runs: 48
  }
};

// Dados simulados de conquistas
const achievements = [
  {
    id: 1,
    type: 'medal',
    title: 'Meia Maratona Concluída',
    date: '12 de junho de 2023',
    details: '21.1 km • 1:52:14',
    icon: '🏅'
  },
  {
    id: 2,
    type: 'distance',
    title: 'Meta Mensal: 100km',
    date: '30 de maio de 2023',
    details: '100 km no mês',
    icon: '🏃'
  },
  {
    id: 3,
    type: 'streak',
    title: 'Sequência de 7 dias',
    date: '22 de maio de 2023',
    details: '7 dias consecutivos correndo',
    icon: '🔥'
  }
];

// Dados simulados de fotos
const photos = [
  { id: 1, src: 'https://placehold.co/600x400?text=Corrida+Matinal', alt: 'Corrida Matinal' },
  { id: 2, src: 'https://placehold.co/600x400?text=Parque+Ibirapuera', alt: 'Parque Ibirapuera' },
  { id: 3, src: 'https://placehold.co/600x400?text=Treino+em+Grupo', alt: 'Treino em Grupo' },
  { id: 4, src: 'https://placehold.co/600x400?text=Maratona+SP', alt: 'Maratona SP' },
  { id: 5, src: 'https://placehold.co/600x400?text=Novo+Tênis', alt: 'Novo Tênis' },
  { id: 6, src: 'https://placehold.co/600x400?text=Corrida+Noturna', alt: 'Corrida Noturna' },
];

const Profile = () => {
  const navigate = useNavigate();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [userProfile, setUserProfile] = useState(userData);

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = (updatedProfile: typeof userData) => {
    setUserProfile(updatedProfile);
    setIsEditing(false);
    
    // Em uma aplicação real, aqui enviaríamos os dados para um backend
    // api.updateUserProfile(updatedProfile).then(() => setIsEditing(false));
  };

  const handleAddPost = () => {
    setIsAddModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pb-20">
      <div className="container mx-auto px-4 py-6">
        {/* Barra de navegação superior */}
        <div className="flex justify-between items-center mb-4">
          <button 
            onClick={() => navigate(-1)} 
            className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center"
          >
            <ArrowLeft size={20} />
          </button>
          
          {isEditing ? (
            <Button 
              onClick={() => handleSaveProfile(userProfile)} 
              className="bg-pace-blue hover:bg-pace-blue/90"
            >
              Salvar
            </Button>
          ) : (
            <Button 
              onClick={handleEditProfile} 
              variant="outline" 
              className="border-pace-blue text-pace-blue hover:bg-pace-blue/10"
            >
              <Edit2 size={18} className="mr-2" /> Editar Perfil
            </Button>
          )}
        </div>
        
        {/* Cabeçalho do perfil */}
        <ProfileHeader 
          user={userProfile} 
          isEditing={isEditing} 
          onUpdateUser={(updatedUser) => setUserProfile({...userProfile, ...updatedUser})}
        />
        
        {/* Bio */}
        <ProfileBio 
          bio={userProfile.bio}
          location={userProfile.location}
          joinedDate={userProfile.joinedDate}
          isEditing={isEditing}
          onUpdateBio={(newBio) => setUserProfile({...userProfile, bio: newBio})}
          onUpdateLocation={(newLocation) => setUserProfile({...userProfile, location: newLocation})}
        />
        
        {/* Estatísticas do usuário */}
        <div className="flex justify-around bg-white dark:bg-slate-900/80 rounded-xl shadow-sm p-4 mb-6">
          <div className="text-center">
            <div className="text-lg font-bold">{userProfile.stats.following}</div>
            <div className="text-sm text-slate-500">Seguindo</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold">{userProfile.stats.followers}</div>
            <div className="text-sm text-slate-500">Seguidores</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold">{userProfile.stats.runs}</div>
            <div className="text-sm text-slate-500">Corridas</div>
          </div>
        </div>
        
        {/* Conquistas */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Conquistas</h2>
          <AchievementsList achievements={achievements} />
        </div>
        
        {/* Fotos */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Fotos de Corridas</h2>
          <PhotoGrid photos={photos} />
        </div>
        
        {/* Botão flutuante para adicionar post */}
        <button 
          onClick={handleAddPost}
          className="fixed bottom-20 right-4 w-14 h-14 rounded-full bg-pace-blue text-white flex items-center justify-center shadow-lg"
        >
          <Plus size={24} />
        </button>
        
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

export default Profile;
