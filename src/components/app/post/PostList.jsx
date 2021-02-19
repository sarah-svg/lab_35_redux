import React from 'react';
import { getPost } from '../../../selectors/postSelectors';
import { useSelector } from 'react-redux';
import Post from './Post';
import uuid from 'react-uuid';

const PostList = () => {

  const posts = useSelector(getPost);

  const postElements = posts.map(post => (
    <li key={post.index}>
      <Post {...post}/>
    </li>
     
  ));

  return (
    <ul>
      {postElements}
    </ul>

  );
};
export default PostList;
