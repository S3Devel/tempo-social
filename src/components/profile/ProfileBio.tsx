
import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

type ProfileBioProps = {
  bio: string;
  location: string;
  joinedDate: string;
  isEditing: boolean;
  onUpdateBio: (bio: string) => void;
  onUpdateLocation: (location: string) => void;
};

const ProfileBio = ({ 
  bio, 
  location, 
  joinedDate, 
  isEditing, 
  onUpdateBio, 
  onUpdateLocation 
}: ProfileBioProps) => {
  return (
    <div className="mb-6 space-y-3">
      {isEditing ? (
        <Textarea
          value={bio}
          onChange={(e) => onUpdateBio(e.target.value)}
          placeholder="Adicione uma biografia"
          className="resize-none w-full"
          rows={3}
        />
      ) : (
        <p className="text-sm">{bio}</p>
      )}
      
      <div className="flex items-center text-sm text-slate-500">
        <MapPin size={16} className="mr-1" />
        {isEditing ? (
          <Input
            value={location}
            onChange={(e) => onUpdateLocation(e.target.value)}
            placeholder="Localização"
            className="h-8 text-sm"
          />
        ) : (
          <span>{location}</span>
        )}
      </div>
      
      <div className="flex items-center text-sm text-slate-500">
        <Calendar size={16} className="mr-1" />
        <span>{joinedDate}</span>
      </div>
    </div>
  );
};

export default ProfileBio;
