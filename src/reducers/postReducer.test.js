import { createPost } from '../actions/postActions';
import postReducer from './postReducers';

/* eslint-disable max-len */
describe('post reducer functionality', () => {
  it('checks to make sure the user is able to add a post with CREATE_POST', () => {
    const state = {
      post: []
    };
    const action = createPost({
      post: 'hope it works'
    });

    const newState = postReducer(state, action);
    expect(newState).toEqual({ post: [{  post: 'hope it works' }] });
  });




});
