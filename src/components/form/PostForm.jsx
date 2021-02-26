import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/postAction';

const PostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(createPost({ title, body }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={({ target }) => setTitle(target.value)}
      />
      <input
        type="text"
        placeholder="Body"
        value={body}
        onChange={({ target }) => setBody(target.value)}
      />
      <button>Create Post</button>

    </form>
  );
};

export default PostForm;
