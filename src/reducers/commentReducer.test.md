/* eslint-disable max-len */
import { createComment, deleteComment } from '../actions/commentActions';
import commentReducer from './commentReducer';

describe.skip('comment reducer', () => {
  it('checks to make sure the user is able to creat a comment', () => {
    // const state = {};
    const state = {
      comment: []
    };
    const action = createComment({
      index: '1',
      comment: 'really cool comment'
    });
    const newState = commentReducer(state, action);

    expect(newState).toEqual({       comment: [{
      index: '1',
      comment: 'really cool comment'
    }]
   
    
    });
  });

  it('checks to make sure the user is able to delete a commit', () => {
    const state = {
      comment: [{ index: 1 }]
    };
    const action = deleteComment('Dan');
    expect(commentReducer(state, action)).toEqual({   comment: [{ index: 1 }] });
  });
  
});
