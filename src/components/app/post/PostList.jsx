import React from 'react';
import { getPost } from '../../../selectors/postSelectors';
import { useSelector } from '../../../state/PostProvider';
import Post from './Post';
import uuid from 'react-uuid';

const PostList = () => {

  const posts = useSelector(getPost);

  const postElements = posts.map(post => (
    <li key={uuid()}>
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
