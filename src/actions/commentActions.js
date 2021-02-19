export const CREATE_COMMENT = 'CREATE_COMMENT';

export const createCommit = ({ comment, postIndex }) => ({
  type: CREATE_COMMENT,
  payload: { postIndex, comment }
});

export const DELETE_COMMENT = 'DELETE_COMMENT';

export const deleteComment = (user) => ({
  type: DELETE_COMMENT,
  payload: user
});
