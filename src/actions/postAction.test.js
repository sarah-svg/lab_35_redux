import { createPost,
  CREATE_POST, 
  deletePost, 
  DELETE_POST } from './postActions';

describe('post actions', () => {
  it('makes a CREATE_POST action', () => {
    const action = createPost({
      title: 'playing footbal',
      body: 'games about playing footbal'
    });

    expect(action).toEqual({
      type: CREATE_POST,
      payload: {
        title: 'playing footbal',
        body: 'games about playing footbal'
      }
    });
  });

  it('makes a DELETE_POST action', () => {
    const action = deletePost({
      body: 'playing footbal'
    });

    expect(action).toEqual({
      type: DELETE_POST,
      payload: {
        body: 'playing footbal'
      }
    });
  });
});
