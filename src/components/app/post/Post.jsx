import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../actions/postActions';
import CommentForm from '../form/CommentForm';
import Comment from '../comment/comment';
import {  deleteComments } from '../../../actions/commentActions';

const Post = ({ title, post, index, comment }) => {
  const dispatch = useDispatch();

  console.log(comment, 'Post');

  const handleClick = () => {
    dispatch(deletePost(index));
    dispatch(deleteComments(index));
   
  };

  return (
    <div>
      <span>{title}</span>
      <span>Post: {post}</span>
      <button onClick={handleClick}>Delete Post</button> 
      <CommentForm index={index}/>
      <Comment comment={comment}/>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
  comment: PropTypes.objectOf(PropTypes.shape({
    index: PropTypes.string.isRequired,
    comment: PropTypes.object.isRequired
  }))
};

export default Post;

