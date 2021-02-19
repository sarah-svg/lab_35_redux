import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createComment } from '../../../actions/commentActions';


const CommentForm = () => {
  const dispatch = useDispatch();


  const [comment, setComment] = useState('');
  const [user, setUser] = useState('');

  const commentsSubmit = event => {
    event.preventDefault();
    dispatch(createComment({ comment, user }));
  };

  return (
    <>
      <br></br>
      <form onSubmit={commentsSubmit}>
        <input
          type="text"
          placeholder="User"
          value={user}
          onChange={({ target }) => setUser(target.value)} 
        />
        <input
          type="text"
          placeholder="comment"
          value={comment}
          onChange={({ target }) => setComment(target.value)}
        />
        <button>Create Comment</button>
      </form>
    </>

  
  );
};
export default CommentForm;
