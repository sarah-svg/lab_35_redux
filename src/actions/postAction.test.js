import { createPost,
  CREATE_POST, 
  deletePost, 
  DELETE_POST } from './postActions';

describe('post actions', () => {
  it('makes a CREATE_POST action', () => {
    const action = createPost({
      title: 'life and stuff',
      body: 'things and stuff about life and stuff'
    });

    expect(action).toEqual({
      type: CREATE_POST,
      payload: {
        title: 'life and stuff',
        body: 'things and stuff about life and stuff'
      }
    });
  });

  it('makes a DELETE_POST action', () => {
    const action = deletePost({
      body: 'life and stuff'
    });

    expect(action).toEqual({
      type: DELETE_POST,
      payload: {
        body: 'life and stuff'
      }
    });
  });
});
