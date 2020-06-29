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

interface IGetState {
  id: number;
}

interface ISetState {
  id: number[];
}

type Payload = IGetState | ISetState;

// export default function userReducer(
//   state: IUserState = initialState,
//   action: ActionCreator<Payload>
// ): IUserState {
//   switch (action.type) {
//     case UserAction.like:
//       return {
//         ...state,
//         liked: [...state.liked, (action.payload as ISetState).id]
//       };
//     case 
//   }
// }