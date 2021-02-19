import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../actions/postActions';
import CommentForm from '../form/CommentForm';
import Comment from '../comment/comment';

const Post = ({ title, post, postIndex }) => {
  const dispatch = useDispatch();

  console.log('post', title, post);

  const handleClick = () => {
    dispatch(deletePost(title, postIndex));
  };

  return (
    <div>
      <span>{title}</span>
      <span>Post: {post}</span>
      <button onClick={handleClick}>Delete Post</button> 
      <CommentForm />
      <Comment/>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  postIndex: PropTypes.string.isRequired,
};

export default Post;

