import { User } from './user.types';

export interface IActivity {
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
  participants: Array<{
    username: string;
    profile_picture: string;
  }>;
  likes: Array<{
    username: string;
    profile_picture: string;
  }>;
  comments: Array<{
    username: string,
    profile_picture: string,
    comment: string
  }>;
}