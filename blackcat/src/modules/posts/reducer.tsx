import * as actionType from './constants';
import { ActionCreator } from '../../types/action.types';
import { IActivity } from '../../types/activity.types'
import { act } from 'react-dom/test-utils';
import { stat } from 'fs';

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

// export const initialState = {
//   isPending: false,
//   activities: [],
//   error: ''
// }

// export interface IPostState {
//   isPending: boolean,
//   activities: IActivity[],
//   error: string
// }

// export const requestActivities = (
//   state: IPostState =initialState, 
//   action: ActionCreator) => {
//   switch (action.type) {
//     case actionType.REQUEST_POST_PENDING:
//       return Object.assign({}, state, { isPending: true })
//     case actionType.REQUEST_POST_SUCCESS:
//       return Object.assign({}, state, { activities: action.payload, isPending: false })
//     case actionType.REQUEST_POST_FAILED:
//       return Object.assign({}, state, { error: action.payload, isPending: false })
//     default:
//       return state
//   }
// }