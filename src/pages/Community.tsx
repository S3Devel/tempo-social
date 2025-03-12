
import React from 'react';
import { Search, Users, Award, MapPin, Map, Trophy, Dumbbell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Community = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Comunidade</h1>
        
        <div className="space-y-4 mb-8">
          <Button 
            onClick={() => navigate('/search')}
            variant="outline" 
            className="w-full justify-start h-14 text-left px-4 bg-white dark:bg-slate-900/80 shadow-sm hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <Search className="mr-3 text-pace-blue" size={24} />
            <div>
              <p className="font-medium">Buscar Corredores</p>
              <p className="text-xs text-slate-500">Encontre e siga outros corredores</p>
            </div>
          </Button>
          
          <Button 
            onClick={() => navigate('/rankings')}
            variant="outline" 
            className="w-full justify-start h-14 text-left px-4 bg-white dark:bg-slate-900/80 shadow-sm hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <Trophy className="mr-3 text-pace-green" size={24} />
            <div>
              <p className="font-medium">Rankings</p>
              <p className="text-xs text-slate-500">Veja os melhores corredores por distância</p>
            </div>
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full justify-start h-14 text-left px-4 bg-white dark:bg-slate-900/80 shadow-sm hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <Users className="mr-3 text-purple-500" size={24} />
            <div>
              <p className="font-medium">Grupos de Corrida</p>
              <p className="text-xs text-slate-500">Participe de grupos na sua região</p>
            </div>
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full justify-start h-14 text-left px-4 bg-white dark:bg-slate-900/80 shadow-sm hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <Award className="mr-3 text-amber-500" size={24} />
            <div>
              <p className="font-medium">Eventos</p>
              <p className="text-xs text-slate-500">Descubra corridas e maratonas</p>
            </div>
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full justify-start h-14 text-left px-4 bg-white dark:bg-slate-900/80 shadow-sm hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <MapPin className="mr-3 text-red-500" size={24} />
            <div>
              <p className="font-medium">Locais Populares</p>
              <p className="text-xs text-slate-500">Encontre os melhores lugares para correr</p>
            </div>
          </Button>
        </div>
        
        {/* Visualizar todos os corredores próximos */}
        <div className="bg-gradient-to-r from-pace-blue to-pace-green text-white rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold mb-3">154 corredores perto de você</h2>
          <p className="text-sm opacity-90 mb-4">Veja quem está correndo em São Paulo agora e conecte-se com a comunidade local.</p>
          <Button variant="secondary" className="bg-white text-pace-blue hover:bg-white/90">
            Ver no Mapa
          </Button>
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
