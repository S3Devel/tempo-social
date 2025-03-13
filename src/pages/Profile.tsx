
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileActions from '@/components/profile/ProfileActions';
import ProfileContent from '@/components/profile/ProfileContent';
import AddPostModal from '@/components/profile/AddPostModal';
import AddPostButton from '@/components/profile/AddPostButton';
import ProfileBottomNav from '@/components/profile/ProfileBottomNav';
import { Achievement } from '@/components/profile/AchievementsList';
import { useToast } from '@/hooks/use-toast';

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
const achievements: Achievement[] = [
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
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [userProfile, setUserProfile] = useState(userData);
  const { toast } = useToast();

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    
    toast({
      title: "Perfil atualizado",
      description: "Suas alterações foram salvas com sucesso!"
    });
    
    // Em uma aplicação real, aqui enviaríamos os dados para um backend
    // api.updateUserProfile(updatedProfile).then(() => setIsEditing(false));
  };

  const handleAddPost = () => {
    setIsAddModalOpen(true);
  };

  const handleUpdateBio = (bio: string) => {
    setUserProfile({...userProfile, bio});
  };

  const handleUpdateLocation = (location: string) => {
    setUserProfile({...userProfile, location});
  };

  const handleUpdateUser = (updatedUser: Partial<typeof userData>) => {
    setUserProfile({...userProfile, ...updatedUser});
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pb-20">
      <div className="container mx-auto px-4 py-6">
        {/* Barra de navegação superior */}
        <ProfileActions 
          isEditing={isEditing} 
          onEdit={handleEditProfile} 
          onSave={handleSaveProfile} 
        />
        
        {/* Cabeçalho do perfil */}
        <ProfileHeader 
          user={userProfile} 
          isEditing={isEditing} 
          onUpdateUser={handleUpdateUser}
        />
        
        {/* Conteúdo principal */}
        <ProfileContent 
          userProfile={userProfile}
          achievements={achievements}
          photos={photos}
          isEditing={isEditing}
          onUpdateBio={handleUpdateBio}
          onUpdateLocation={handleUpdateLocation}
        />
        
        {/* Botão flutuante para adicionar post */}
        <AddPostButton onClick={handleAddPost} />
        
        {/* Modal para adicionar post */}
        <AddPostModal 
          isOpen={isAddModalOpen} 
          onClose={() => setIsAddModalOpen(false)} 
        />
        
        {/* Bottom Navigation */}
        <ProfileBottomNav />
      </div>
    </div>
  );
};

export default Profile;
