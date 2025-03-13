
export interface Comment {
  id: string;
  userId: string;
  username: string;
  avatar: string;
  text: string;
  createdAt: string;
}

export interface Post {
  id: string;
  userId: string;
  username: string;
  userAvatar: string;
  caption: string;
  imageUrl: string;
  likes: number;
  liked: boolean;
  comments: Comment[];
  createdAt: string;
  location?: string;
}
