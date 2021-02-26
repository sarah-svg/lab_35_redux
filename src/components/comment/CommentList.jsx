import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comments';


export default function CommentList({ comment }) {
  return (
    <ul>
      {
        comment.map((comment, i) => {
          return (
            <li key={i}>
              <Comment {...comment} />
            </li>
          );
        })
      }
    </ul>
  );
}

CommentList.propTypes = {
  comment: PropTypes.arrayOf(PropTypes.shape({
    body: PropTypes.string.isRequired
  }))
};
