import * as actionType from '../constants';
import { ActionCreator } from '../../../types/action.types';
import { IActivity } from '../../../types/activity.types'

const initialState = {
  post: {
    id: 0,
    profile_picture: '',
    username: '',
    channel_name: '',
    title: '',
    description: '',
    start_date: '',
    end_date: '',
    start_time: '',
    end_time: '',
    location: '',
    address: '',
    participants: [],
    likes: [],
    comments: [],
  },
  isOn: 'info'
}

export interface IPostDetailState {
  post: IActivity;
  isOn: string;
}

interface IFinishFetchPayload {
  post: IActivity;
}

interface ISetOnPayload {
  status: string;
}

type Payloads = IFinishFetchPayload | ISetOnPayload;

export default function postDetailReducer(
  state: IPostDetailState = initialState,
  action: ActionCreator<Payloads>
): IPostDetailState {
  switch (action.type) {
    case actionType.FINISH_FETCH_POST_DETAIL:
      const { payload } = action as ActionCreator<IFinishFetchPayload>
      console.log('masuk')
      console.log(payload.post)
      return {
        ...state,
        post: payload.post
      };
    case actionType.SET_STATUS:
      return {
        ...state,
        isOn: (action as ActionCreator<ISetOnPayload>).payload.status
      }
  }
  return state;
}