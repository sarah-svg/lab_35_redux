import React, { useState } from 'react';
import { createPost } from '../../../actions/postActions';
import { useDispatch } from 'react-redux';
import { createCommit } from '../../../actions/commentActions';

const PostForm = () => {
  const dispatch = useDispatch();

  const [post, setPost] = useState('');
  const [title, setTitle] = useState('');
  // const [comment, setComment] = useState('');
  // const [user, setUser] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(createPost({ post, title }));
    // dispatch(createTitle({ title }));
  };
  // const commentsSubmit = event => {
  //   event.preventDefault();
  //   dispatch(createCommit({ comment, user }));
  // };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Post"
          value={post}
          onChange={({ target }) => setPost(target.value)}
        /> 
        <input 
          type="text"
          placeholder="Title"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        /> 
        <button>Create Post</button> 
      </form>
      <br></br>
      {/* <form onSubmit={commentsSubmit}>
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

      </form> */}



    </>

  
  );
};
export default PostForm;
