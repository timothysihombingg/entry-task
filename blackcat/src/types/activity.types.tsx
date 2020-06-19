import { User } from './user.types';

export interface Activity {
  id: number;
  profile_picture: string;
  username: string;
  channel_name: string;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  start_time: string;
  end_time: string;
  location: string;
  address: string;
  participants: Array<User>;
  comments: Array<{
    user: User,
    comment: string
  }>;
  going: Array<User>;
  likes: Array<User>;
}