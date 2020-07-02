import { combineReducers } from 'redux';
import postReducer, { IPostState } from './posts/reducer';
import UserReducer, { IUserState } from './user/reducer';
import postDetailReducer, { IPostDetailState } from './posts/post_detail/reducer';

export interface RootState {
  post: IPostState;
  user: IUserState;
  activity: IPostDetailState;
}

export default combineReducers({
  post: postReducer,
  user: UserReducer,
  activity: postDetailReducer
});