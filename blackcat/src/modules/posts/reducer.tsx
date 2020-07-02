import * as actionType from './constants';
import { ActionCreator } from '../../types/action.types';
import { IActivity } from '../../types/activity.types'

const initialState = {
  posts: [],
  loading: false
};

export interface IPostState {
  posts: IActivity[];
  loading: boolean;
}

interface IFinishFetchPayload {
  posts: IActivity[];
}

interface ISetLoadingPayload {
  status: boolean;
}

type Payloads = IFinishFetchPayload | ISetLoadingPayload;

export default function postReducer(
  state: IPostState = initialState,
  action: ActionCreator<Payloads>
): IPostState {
  switch (action.type) {
    case actionType.FINISH_FETCH_POST:
      const { payload } = action as ActionCreator<IFinishFetchPayload>
      return {
        ...state,
        posts: [...state.posts, ...payload.posts]
      };
    case actionType.SET_LOADING:
      return {
        ...state,
        loading: (action as ActionCreator<ISetLoadingPayload>).payload.status
      }
  }
  return state;
}