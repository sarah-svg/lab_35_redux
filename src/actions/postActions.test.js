/* eslint-disable max-len */
import { createPost, CREATE_POST, deletePost, DELETE_POST } from './postActions';

describe.only('post actions for creating a post', () => {
  it('creates a create post action', () => {
    const action = createPost({
      post:'hey'
    });
  
    expect(action).toEqual({
      type: CREATE_POST,
      payload: { post:'hey' }
    });
  });
  
  it('delete a post', () => {
    const action = deletePost({
      index:1
    });
  
    expect(action).toEqual({
      type: DELETE_POST,
      payload: { index: 1 } 
    });
  });

});
