import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../actions/postActions';
import CommentForm from '../form/CommentForm';
import Comment from '../comment/comment';
import { deleteComment } from '../../../actions/commentActions';

const Post = ({ title, post, index }) => {
  const dispatch = useDispatch();

  console.log('post', title, post);

  const handleClick = () => {
    dispatch(deletePost(index));
   
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
  index: PropTypes.string.isRequired,
};

export default Post;

