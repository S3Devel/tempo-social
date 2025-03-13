
import React, { useState } from 'react';
import { Heart, MessageCircle, Share, MoreHorizontal, MapPin } from 'lucide-react';
import { Post, Comment } from '@/types/Post';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface PostCardProps {
  post: Post;
  onLike: (postId: string) => void;
  onComment: (postId: string, comment: string) => void;
}

const PostCard = ({ post, onLike, onComment }: PostCardProps) => {
  const [commentText, setCommentText] = useState('');
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    onLike(post.id);
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim()) {
      onComment(post.id, commentText);
      setCommentText('');
    }
  };

  const formattedDate = formatDistanceToNow(new Date(post.createdAt), {
    addSuffix: true,
    locale: ptBR
  });

  return (
    <div className="bg-white dark:bg-slate-900/80 rounded-xl shadow-sm mb-4 overflow-hidden">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-xl overflow-hidden">
            {post.userAvatar}
          </div>
          <div>
            <div className="font-semibold">{post.username}</div>
            {post.location && (
              <div className="text-xs text-slate-500 flex items-center">
                <MapPin size={12} className="mr-1" />
                {post.location}
              </div>
            )}
          </div>
        </div>
        <button className="text-slate-500">
          <MoreHorizontal size={20} />
        </button>
      </div>
      
      {/* Imagem */}
      <div className="aspect-square w-full">
        <img 
          src={post.imageUrl} 
          alt={post.caption} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Ações */}
      <div className="p-3">
        <div className="flex items-center space-x-4 mb-2">
          <button 
            onClick={handleLike}
            className={`flex items-center ${post.liked ? 'text-red-500' : 'text-slate-700 dark:text-slate-300'}`}
          >
            <Heart size={24} fill={post.liked ? 'currentColor' : 'none'} />
          </button>
          <button 
            onClick={() => setShowComments(!showComments)}
            className="flex items-center text-slate-700 dark:text-slate-300"
          >
            <MessageCircle size={24} />
          </button>
          <button className="flex items-center text-slate-700 dark:text-slate-300">
            <Share size={24} />
          </button>
        </div>
        
        {/* Contagem de curtidas */}
        <div className="font-semibold mb-1">{post.likes} curtidas</div>
        
        {/* Legenda */}
        <div className="mb-1">
          <span className="font-semibold mr-2">{post.username}</span>
          <span>{post.caption}</span>
        </div>
        
        {/* Data */}
        <div className="text-xs text-slate-500 mb-2">{formattedDate}</div>
        
        {/* Comentários */}
        {showComments && (
          <div className="mt-3 space-y-2">
            {post.comments.map((comment) => (
              <div key={comment.id} className="flex items-start space-x-2">
                <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-sm overflow-hidden flex-shrink-0">
                  {comment.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline">
                    <span className="font-semibold text-sm mr-2">{comment.username}</span>
                    <span className="text-sm">{comment.text}</span>
                  </div>
                  <div className="text-xs text-slate-500">
                    {formatDistanceToNow(new Date(comment.createdAt), {
                      addSuffix: true,
                      locale: ptBR
                    })}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Formulário de comentário */}
            <form onSubmit={handleSubmitComment} className="flex items-center mt-3">
              <input
                type="text"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Adicione um comentário..."
                className="flex-1 bg-slate-100 dark:bg-slate-800 text-sm p-2 rounded-full mr-2 focus:outline-none focus:ring-1 focus:ring-pace-blue"
              />
              <Button 
                type="submit" 
                variant="ghost" 
                size="sm" 
                className="text-pace-blue"
                disabled={!commentText.trim()}
              >
                Enviar
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;
