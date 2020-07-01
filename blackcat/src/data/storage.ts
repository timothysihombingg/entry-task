import { IUser } from '../types/user.types';

enum StorageKeys {
  user = 'storage/user',
  liked = 'storage/post/liked',
  participated = 'storage/post/participated',
}

export const setUserStorage = (user: IUser) => {
  localStorage.setItem(StorageKeys.user, JSON.stringify(user));
  localStorage.setItem(StorageKeys.liked, JSON.stringify(user.likes));
  localStorage.setItem(StorageKeys.participated, JSON.stringify(user.going));
}

export const getUserStorage = (): IUser =>
  JSON.parse(localStorage.getItem(StorageKeys.user) || '{}');

export const setLikedStorage = (id: number): number[] => {
  let liked: number[] = JSON.parse(
    localStorage.getItem(StorageKeys.liked) || '[]'
  );

  if (liked.includes(id)) {
    liked = liked.filter(currId => currId !== id);
    console.log(liked)
  } else {
    liked.push(id);
  }

  localStorage.setItem(StorageKeys.liked, JSON.stringify(liked));
  return liked;
}

export const getLikedStorage = (): number[] => {
  let liked: number[] = JSON.parse(
    localStorage.getItem(StorageKeys.liked) || '[]'
  );

  return liked;
}

export const setParticipatedStorage = (id: number): number[] => {
  let participated: number[] = JSON.parse(
    localStorage.getItem(StorageKeys.participated) || '[]'
  );

  if (participated.includes(id)) {
    participated =  participated.filter(currId => currId !== id);
  } else {
    participated.push(id);
  }

  localStorage.setItem(StorageKeys.participated, JSON.stringify(participated));
  return participated;
}

export const getParticipatedStorage = (): number[] => {
  let participated: number[] = JSON.parse(
    localStorage.getItem(StorageKeys.participated) || '[]'
  );

  return participated;
}