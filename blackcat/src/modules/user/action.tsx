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

export function likePostAction(id: number) {
  return function(dispatch: Dispatch) {
    const liked = setLikedStorage(id);
    dispatch(getLiked(liked));
  }
}

export function participatePostAction(id: number) {
  return function(dispatch: Dispatch) {
    const liked = setParticipatedStorage(id);
    dispatch(getParticipated(liked));
  }
}

export function getLiked(id: number[]) {
  return {
    type: UserAction.getLiked,
    payload: {
      id
    }
  }
}

export function getParticipated(id: number[]) {
  return {
    type: UserAction.getParticipated,
    payload: {
      id
    }
  }
}

export function like(id: number) {
  return {
    type: UserAction.participate,
    payload: {
      id
    }
  }
}

export function participate(id: number) {
  return {
    type: UserAction.participate,
    payload: {
      id
    }
  }
}