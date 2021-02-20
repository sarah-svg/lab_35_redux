import React, { useState } from 'react';
import { createPost } from '../../../actions/postActions';
import { useDispatch } from 'react-redux';


const PostForm = () => {
  const dispatch = useDispatch();

  const [post, setPost] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(createPost({ post, title }));
  };

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
    </>

  
  );
};
export default PostForm;
