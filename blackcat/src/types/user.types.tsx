export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  profile_picture: string;
  likes: Array<{post_id: string}>;
  going: Array<{post_id: string}>;
}