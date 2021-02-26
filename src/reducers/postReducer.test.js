import { createPost, deletePost } from '../actions/postActions';
import reducer from './postReducer';

describe('post reducer', () => {
  it('add a post with CREATE_POST action', () => {
    const state = {
      post: []
    };
        
    const action = createPost({
      title: 'travel',
      body: 'Hey how about a roadtrip!' 
    });

    const newState = reducer(state, action);

    expect(newState).toEqual({
      post: {
        '0': {
          title: 'travel',
          body: 'Hey how about a roadtrip!'
        }
      }
    });
  });

  it('handles the DELETE_POST action', () => {
    const state = {
      post: {
        '0': {
          title: 'life and stuff',
          body: 'things and stuff about life and stuff'
        }
      }
    };

    const action = deletePost('0');
    const newState = reducer(state, action);

    expect(newState).toEqual({
      post: {}
    });
  });
});
