import { createCommit,
  CREATE_COMMENT, 
  deleteComment, 
  DELETE_COMMENT } from './commentActions';

describe('comment action for creating a commit', () => {
  it('creates a comment', () => {
    const action = createCommit({
      comment: 'how are you', postIndex: 1
    });
    expect(action).toEqual({
      type: CREATE_COMMENT,
      payload:{ comment: 'how are you', postIndex: 1 }
    });
  });

  it('deletes a comment via the user', () => {
    const action = deleteComment({
      user: 'Sarah'
    });

    expect(action).toEqual({
      type: DELETE_COMMENT,
      payload: { user: 'Sarah' }
    });
  });
});
