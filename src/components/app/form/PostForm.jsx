import React, { useState } from 'react';
import { createPost } from '../../../actions/postActions';
import { useDispatch } from '../../../state/PostProvider';

const PostForm = () => {
  const dispatch = useDispatch();
  const [post, setPost] = useState('');

  const handleSubmit = event => {
    event.prevantDefault();

    dispatch(createPost({ post }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Post"
        value={post}
        onChange={({ target }) => setPost(target.value)}
      /> 
      <button>Create Post</button> 
    </form>
  );
};
export default PostForm;
