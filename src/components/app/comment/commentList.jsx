import React from 'react';
import Comment from './comment';
import PropTypes from 'prop-types';

function CommentList({ comment }) {
  return (
    <ul>
      {
        comment.map((comment, i) => {

          return (
            <li key={i}>
              <Comment {...comment}/>
            </li>
          );
        })
      }
    </ul>
  );
}

CommentList.propTypes = {
  comment: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.string.isRequired
    }) 
  )
};

export default CommentList;


