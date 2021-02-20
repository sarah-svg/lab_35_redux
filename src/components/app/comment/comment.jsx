import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../../actions/commentActions';

const Comment = ({ comment, user }) => {
  const  dispatch = useDispatch();

  // eslint-disable-next-line no-console
  const handleClick = () => {
    dispatch(deleteComment(user));
  };
  
  const newComment = comment.map(comment => {
    return (
      <li key={comment.index}>
        <div>
          <span>comment:{comment}</span> 
          <span>user: {user}</span> 
          <button onClick={handleClick}>Delete Comment</button>
        </div>
      </li>
    );
  });
  console.log(comment);
  return (
    <div>
      {newComment}
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.array.isRequired,
  user: PropTypes.string.isRequired

};

export default Comment;

//  <span>comment:{comment}</span> 

//     <span>user: {user}</span> 
//     <button onClick={handleClick}>Delete Comment</button>
