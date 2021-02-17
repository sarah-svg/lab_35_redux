import { createPost, CREATE_POST } from './postActions';

describe('post actions for creating a post', () => {
  it('creates a create post action', () => {
    const action = createPost({
      post:'hey'
    });
  
    expect(action).toEqual({
      type: CREATE_POST,
      payload: { post:'hey' }
    });
  });
});
