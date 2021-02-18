// Blog Combine Reducers
import { combineReducers } from 'redux';
import commentReducer from './commentReducer';
import postReducer from './postReducers';

export default combineReducers({
  post: postReducer,
  comment: commentReducer
});
