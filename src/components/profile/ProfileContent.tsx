
import React from 'react';
import ProfileBio from './ProfileBio';
import ProfileStats from './ProfileStats';
import AchievementsList, { Achievement } from './AchievementsList';
import PhotoGrid from './PhotoGrid';

type Photo = {
  id: number;
  src: string;
  alt: string;
};

type ProfileContentProps = {
  userProfile: {
    bio: string;
    location: string;
    joinedDate: string;
    stats: {
      following: number;
      followers: number;
      runs: number;
    };
  };
  achievements: Achievement[];
  photos: Photo[];
  isEditing: boolean;
  onUpdateBio: (bio: string) => void;
  onUpdateLocation: (location: string) => void;
};

const ProfileContent = ({ 
  userProfile, 
  achievements, 
  photos, 
  isEditing, 
  onUpdateBio, 
  onUpdateLocation 
}: ProfileContentProps) => {
  return (
    <>
      {/* Bio */}
      <ProfileBio 
        bio={userProfile.bio}
        location={userProfile.location}
        joinedDate={userProfile.joinedDate}
        isEditing={isEditing}
        onUpdateBio={onUpdateBio}
        onUpdateLocation={onUpdateLocation}
      />
      
      {/* Estatísticas do usuário */}
      <ProfileStats stats={userProfile.stats} />
      
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
    </>
  );
};

export default ProfileContent;
