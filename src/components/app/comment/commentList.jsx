import React from 'react';

import { useSelector } from 'react-redux';
import { getComment } from '../../../selectors/commentSelectors';
import Comment from './comment';


const CommentList = () => {

  const comment = useSelector(getComment);

  const commentElements = comment.map((post, i) => (
    <li key={i}>
      <Comment />
    </li>
  ));

  return (
    <ul>
      {commentElements}
    </ul>

  );
};
export default CommentList;
