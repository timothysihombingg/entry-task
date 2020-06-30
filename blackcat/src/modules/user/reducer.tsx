import { ActionCreator } from '../../types/action.types';
import UserAction from './constants';

export interface IUserState {
  liked: number[],
  participated: number[]
}

const initialState: IUserState = {
  liked: [],
  participated: []
}

interface IGetPayload {
  id: number;
}

interface ISetPayload {
  id: number[];
}

type Payload = IGetPayload | ISetPayload;

export default function UserReducer(
  state: IUserState = initialState,
  action: ActionCreator<Payload>
): IUserState {
  switch (action.type) {
    case (UserAction.like):
      return {
        ...state,
        liked: [
          ...state.liked,  (action.payload as IGetPayload).id
        ]
      }
    case (UserAction.participate):
      return {
        ...state,
        participated: [
          ...state.participated,
          (action.payload as IGetPayload).id
        ]
      }
    case (UserAction.getLiked):
      return {
        ...state,
        liked: (action.payload as ISetPayload).id
      }
    case (UserAction.getParticipated):
      return {
        ...state,
        participated: (action.payload as ISetPayload).id
      }
  }
  return state;
}