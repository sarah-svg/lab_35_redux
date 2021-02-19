import { createCommit, deleteComment } from '../actions/commentActions';
import commentReducer from './commentReducer';

describe('comment reducer', () => {
  it('checks to make sure the user is able to creat a comment', () => {
    const state = {};
    // const state = {
    //   post: [{
    //     title: 'h',
    //     post: 'h',
    //   }],
    //   comment: []
    // };
    const action = createCommit({
      comment: 'hope its working',
      postIndex: '1'
    });
    const newState = commentReducer(state, action);

    expect(newState).toEqual({        comment: ['hope its working']
   
    
    });
  });
  it('checks to make sure the user is able to delete a commit', () => {
    const state = {
      comment: [{ user: 'Dan' }]
    };
    const action = deleteComment('Dan');
    expect(commentReducer(state, action)).toEqual({ comment: [] });
  });
  
});
