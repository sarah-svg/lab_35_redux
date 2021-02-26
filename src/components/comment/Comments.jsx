import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteComment } from '../../actions/commentActions';


export default function Comment({ body }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteComment(body));
  };

  return (
    <>
      { body}
      <button onClick={handleDelete}>Delete Comment</button>
    </>
  );
}

Comment.propTypes = {
  body: PropTypes.string.isRequired
};
