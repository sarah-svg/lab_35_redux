import { createPost, deletePost } from '../actions/postActions';
import postReducer from './postReducers';

/* eslint-disable max-len */
describe('post reducer functionality', () => {
  it('checks to make sure the user is able to add a post with CREATE_POST', () => {
    const state = {
      post: []
    };
    const action = createPost({
      title: 'Really Cool Post',
      body: 'Really cool body'
    });

    const newState = postReducer(state, action);
    expect(newState).toEqual({    post: {
      '0': {
        title: 'Really Cool Post',
        body: 'Really cool body'
      }
    } });
  });

  it('checks to make sure the user is able to delete a post with DELETE_POST', () => {

    const state = {
      post:{ '0': {
        title: 'life and stuff',
        body: 'things and stuff about life and stuff'
      } }
    };

    const action = deletePost('0');
    const newState = postReducer(state, action);
    expect(newState).toEqual({
      post: {

      }
    });

  });



});
