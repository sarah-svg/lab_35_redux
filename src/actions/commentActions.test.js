import { createComment,
  CREATE_COMMENT, 
  deleteComment, 
  DELETE_COMMENT } from './commentActions';

describe.only('comment action for creating a commit', () => {
  it('creates a comment', () => {
    const action = createComment({
      comment: 'how are you'
    });
    expect(action).toEqual({
      type:CREATE_COMMENT,
      payload:  'how are you'
    });
  });

  it('deletes a comment via the user', () => {
    const action = deleteComment({
      index : '1'
    });

    expect(action).toEqual({
      type: DELETE_COMMENT,
      payload: { index : '1' }
    });
  });
});
