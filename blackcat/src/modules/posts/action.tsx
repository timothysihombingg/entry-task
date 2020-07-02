import * as actionType from './constants';
import { IActivity } from '../../types/activity.types';
import { Dispatch } from 'redux';
import { IPaginationParam } from '../../types/service/common_param.types'

export const finishFetchPost = (posts: IActivity[]) => ({
  type: actionType.FINISH_FETCH_POST,
  payload: {
    posts
  }
})

export const finishFetchPostDetail = (post: IActivity) => ({
  type: actionType.FINISH_FETCH_POST_DETAIL,
  payload: {
    post
  }
})

export const setStatus = (status: string) => ({
  type: actionType.SET_STATUS,
  payload: {
    status
  }
})

export const setLoading = (status: boolean) => ({
  type: actionType.SET_LOADING,
  payload: {
    status
  }
})

export const startFetchPost = (
  param: IPaginationParam = { page: 1, limit: 5 }
) => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    fetch("http://localhost:4000/activities")
      .then(res => res.json())
      .then(data => dispatch(finishFetchPost(data as IActivity[])));
    dispatch(setLoading(false));
  }
}

export const startFetchPostDetail = (id: string) => {
  return async (dispatch: Dispatch) => {
    fetch("http://localhost:4000/activity/" + id)
      .then(res => res.json())
      .then(data => {
        dispatch(finishFetchPostDetail(data as IActivity))
        console.log(data)
      });
  }
}

export const setOn = (status: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(setStatus(status))
  }
}