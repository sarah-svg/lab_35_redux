import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { createComment } from '../../../actions/commentActions';



export default function CommentForm({ index }) {
  const dispatch = useDispatch();

  const [body, setBody] = useState('');

  const submitForm = event => {
    event.preventDefault();

    dispatch(createComment({ index, body }));
  };

  const updateBody = ({ target }) => {
    const { value: body } = target;

    setBody(body);
  };
    
  return (
    <form onSubmit={submitForm}>
      <input
        required id="comment-body"
        type="text"
        onChange={updateBody}
        placeholder="Comment"
        value={body}
      />
      <button>Comment</button>
    </form>
        
  );
}


CommentForm.propTypes = {
  index: PropTypes.string.isRequired
};
