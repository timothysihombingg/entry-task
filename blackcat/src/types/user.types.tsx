export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  profile_picture: string;
  likes: Array<{activity_id: string}>;
  going: Array<{activity_id: string}>;
}