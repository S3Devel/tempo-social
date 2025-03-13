
import React from 'react';
import PostCard from './PostCard';
import { Post } from '@/types/Post';
import { useToast } from '@/hooks/use-toast';

interface PostsListProps {
  posts: Post[];
}

const PostsList = ({ posts }: PostsListProps) => {
  const { toast } = useToast();
  
  const handleLike = (postId: string) => {
    // Em uma aplicação real, isso enviaria uma requisição para o backend
    toast({
      title: "Post curtido",
      description: "Sua curtida foi registrada com sucesso!",
    });
  };
  
  const handleComment = (postId: string, comment: string) => {
    // Em uma aplicação real, isso enviaria uma requisição para o backend
    toast({
      title: "Comentário adicionado",
      description: "Seu comentário foi publicado com sucesso!",
    });
  };
  
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostCard 
          key={post.id} 
          post={post}
          onLike={handleLike}
          onComment={handleComment}
        />
      ))}
    </div>
  );
};

export default PostsList;
