import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../actions/commentActions';
import { deletePost } from '../../actions/postActions';
import CommentList from '../comment/CommentList';
import CommentForm from '../comment/CommentForm';

const Post = ({ index, title, body, comment }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deletePost(index));
    dispatch(deleteComment(index));

  };

  return (
    <>

      <dl>
        <dt>Title</dt>
        <dd>{title}</dd>

        <dt>Body</dt>
        <dd>{body}</dd>

        <button onClick={handleClick}>Delete post</button>

        <CommentForm index={index} />
        <CommentList comment={comment} />

      </dl>





    </>
  );
};

Post.propTypes = {
  index: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comment: PropTypes.arrayOf(PropTypes.shape({
    index: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }))
};

export default Post;
