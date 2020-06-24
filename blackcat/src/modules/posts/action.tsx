import * as actionType from './constants';
import { IActivity } from '../../types/activity.types';
import { Dispatch } from 'redux';

export const requestActivities = (dispatch: Dispatch) => {
  dispatch(setPending());
  fetch("http://localhost:4000/activities")
    .then(res => res.json())
    .then(data => dispatch({
      type: actionType.REQUEST_POST_SUCCESS,
      payload: data
    }))
    .catch(error => dispatch({
      type: actionType.REQUEST_POST_FAILED,
      payload: error
    }))
}

function setPending() {
  return {
    type: actionType.REQUEST_POST_PENDING
  }
}