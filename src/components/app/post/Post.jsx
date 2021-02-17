import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from '../../../state/PostProvider';
import { deletePost } from '../../../actions/postActions';

const Post = ({ post }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deletePost(post));
  };
  return (
    <div>
      <span>Post: {post}</span>
      <button onClick={handleClick}>Delete Post</button> 
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.array.isRequired,
};

export default Post;

