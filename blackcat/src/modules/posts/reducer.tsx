import * as actionType from './constants';
import { ActionCreator } from '../../types/action.types';
import { IActivity } from '../../types/activity.types'

export const initialState = {
  isPending: false,
  activities: [],
  error: ''
}

export interface postState {
  isPending: boolean,
  activities: IActivity[],
  error: string
}

export const requestActivities = (
  state=initialState, 
  action:ActionCreator) => {
  switch (action.type) {
    case actionType.REQUEST_POST_PENDING:
      return Object.assign({}, state, { isPending: true })
    case actionType.REQUEST_POST_SUCCESS:
      return Object.assign({}, state, { activities: action.payload, isPending: false })
    case actionType.REQUEST_POST_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false })
    default:
      return state
  }
}