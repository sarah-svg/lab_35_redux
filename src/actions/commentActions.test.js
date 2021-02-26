import { createComment, CREATE_COMMENT } from './commentActions';

describe('comment actions', () => {
  it('creates an action to CREATE_COMMENT', () => {
    const action = createComment({ comment: 'hey guys how are you' });

    expect(action).toEqual({
      type: CREATE_COMMENT,
      payload: { comment: 'hey guys how are you' }
    });
  });
});
