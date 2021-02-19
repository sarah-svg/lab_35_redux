import React from 'react';
import { getPost } from '../../../selectors/postSelectors';
import { useSelector } from 'react-redux';
import Post from './Post';
import { getComment } from '../../../selectors/commentSelectors';
// import uuid from 'react-uuid';

const PostList = () => {

  const post = useSelector(getPost);
  const allComments  = useSelector(getComment);

  const postElements = post.map(post => {
    const comment = allComments
      .filter(comment => comment.index === post.index);

    return (
      <li key={post.index}>
        <Post {...post} comment={comment} />
      </li>
    );

  });

  return (
    <ul>
      {postElements}
    </ul>

  );
};
export default PostList;
