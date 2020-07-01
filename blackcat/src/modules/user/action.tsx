import UserAction from '../user/constants';
import {
  getLikedStorage,
  getParticipatedStorage,
  setLikedStorage,
  setParticipatedStorage
} from '../../data/storage'
import { Dispatch } from 'redux';

export function fetchLiked() {
  return function(dispatch: Dispatch) {
    const liked = getLikedStorage();
    dispatch(getLiked(liked));
  }
}

export function fetchParticipated() {
  return function(dispatch: Dispatch) {
    const participated = getParticipatedStorage();
    dispatch(getParticipated(participated));
  }
}

export function likePost(id: number) {
  return function(dispatch: Dispatch) {
    const liked = setLikedStorage(id);
    dispatch(getLiked(liked));
  }
}

export function participatePost(id: number) {
  return function(dispatch: Dispatch) {
    const participated = setParticipatedStorage(id);
    dispatch(getParticipated(participated));
  }
}

export function getLiked(id: number[]) {
  return {
    type: UserAction.GetLiked,
    payload: {
      id
    }
  }
}

export function getParticipated(id: number[]) {
  return {
    type: UserAction.GetParticipated,
    payload: {
      id
    }
  }
}

export function likePostAction(id: number) {
  return {
    type: UserAction.Participate,
    payload: {
      id
    }
  }
}

export function participatePostAction(id: number) {
  return {
    type: UserAction.Participate,
    payload: {
      id
    }
  }
}