import React from 'react';
import { getPost } from '../../../selectors/postSelectors';
import { useSelector } from 'react-redux';
import Post from './Post';
import { getComment } from '../../../selectors/commentSelectors';
// import uuid from 'react-uuid';

const PostList = () => {

  const post = useSelector(getPost);
  const comment = useSelector(getComment);
  console.log('Postlist', comment);
  const postElements = post.map(post => (
    <li key={post.index}>
      <Post {...post} comment= {comment} />

    </li>
     
  ));

  return (
    <ul>
      {postElements}
    </ul>

  );
};
export default PostList;
