import { createCommit, CREATE_COMMENT } from './commentActions';

describe('comment action for creating a commit', () => {
  it('creates a comment', () => {
    const action = createCommit({
      comment: 'how are you'
    });
    expect(action).toEqual({
      type: CREATE_COMMENT,
      payload:{ comment: 'how are you' }
    });
  });
});
