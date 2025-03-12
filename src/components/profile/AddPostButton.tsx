
import React from 'react';
import { Plus } from 'lucide-react';

type AddPostButtonProps = {
  onClick: () => void;
};

const AddPostButton = ({ onClick }: AddPostButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className="fixed bottom-20 right-4 w-14 h-14 rounded-full bg-pace-blue text-white flex items-center justify-center shadow-lg"
    >
      <Plus size={24} />
    </button>
  );
};

export default AddPostButton;
