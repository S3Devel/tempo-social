
import React, { useState } from 'react';
import { X, Camera, Trophy, Image } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

type AddPostModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AddPostModal = ({ isOpen, onClose }: AddPostModalProps) => {
  const [activeTab, setActiveTab] = useState('foto');
  const [caption, setCaption] = useState('');
  
  const handleSubmit = () => {
    // Lógica para salvar o post
    // Em uma aplicação real, enviaria dados para um backend
    console.log('Post adicionado:', { type: activeTab, caption });
    setCaption('');
    onClose();
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Adicionar Novo Post</DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="foto" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="foto">Foto</TabsTrigger>
            <TabsTrigger value="conquista">Conquista</TabsTrigger>
            <TabsTrigger value="story">Story</TabsTrigger>
          </TabsList>
          
          <TabsContent value="foto" className="space-y-4">
            <div className="aspect-square border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg flex flex-col items-center justify-center p-6 cursor-pointer">
              <Image size={40} className="text-slate-400 mb-2" />
              <p className="text-sm text-slate-500 text-center">
                Clique para escolher uma foto ou arraste e solte aqui
              </p>
            </div>
            
            <Textarea
              placeholder="Adicione uma legenda para sua foto..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="resize-none"
            />
          </TabsContent>
          
          <TabsContent value="conquista" className="space-y-4">
            <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 flex flex-col items-center">
              <Trophy size={40} className="text-amber-500 mb-4" />
              <Input 
                placeholder="Título da conquista" 
                className="mb-2" 
              />
              <Input 
                placeholder="Distância ou tempo" 
                className="mb-2" 
              />
              <Textarea
                placeholder="Detalhes da conquista..."
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                className="resize-none"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="story" className="space-y-4">
            <div className="aspect-[9/16] border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg flex flex-col items-center justify-center p-6 cursor-pointer">
              <Camera size={40} className="text-slate-400 mb-2" />
              <p className="text-sm text-slate-500 text-center">
                Adicione uma foto para o seu story
              </p>
            </div>
            
            <Input
              placeholder="Adicione um texto para seu story..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-end space-x-2 mt-4">
          <Button variant="outline" onClick={onClose}>Cancelar</Button>
          <Button className="bg-pace-blue hover:bg-pace-blue/90" onClick={handleSubmit}>
            Publicar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddPostModal;
