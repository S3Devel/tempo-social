
export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  location?: string;
  joinDate?: string;
  stats?: {
    distance: number;
    pace: number;
    runs: number;
  };
}
