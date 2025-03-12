
import React from 'react';
import { ArrowLeft, Edit2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

type ProfileActionsProps = {
  isEditing: boolean;
  onEdit: () => void;
  onSave: () => void;
};

const ProfileActions = ({ isEditing, onEdit, onSave }: ProfileActionsProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center mb-4">
      <button 
        onClick={() => navigate(-1)} 
        className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center"
      >
        <ArrowLeft size={20} />
      </button>
      
      {isEditing ? (
        <Button 
          onClick={onSave} 
          className="bg-pace-blue hover:bg-pace-blue/90"
        >
          Salvar
        </Button>
      ) : (
        <Button 
          onClick={onEdit} 
          variant="outline" 
          className="border-pace-blue text-pace-blue hover:bg-pace-blue/10"
        >
          <Edit2 size={18} className="mr-2" /> Editar Perfil
        </Button>
      )}
    </div>
  );
};

export default ProfileActions;
