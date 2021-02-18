import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../actions/postActions';

const Post = ({ title, post }) => {
  const dispatch = useDispatch();
  console.log('post', title, post);
  const handleClick = () => {
    dispatch(deletePost(title));
  };
  return (
    <div>
      <span>{title}</span>
      <span>Post: {post}</span>
      <button onClick={handleClick}>Delete Post</button> 
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Post;

