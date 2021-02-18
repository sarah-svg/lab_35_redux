import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import postReducer from './reducers/postReducers';

const store = createStore(postReducer, composeWithDevTools());

export default store;
