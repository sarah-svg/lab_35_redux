import React from 'react';
import { useSelector } from 'react-redux';
import { getcomment } from '../../selectors/commentSelectors';
import { getpost } from '../../selectors/postSelectors';
import Post from './Post';



const PostList = () => {
  const post = useSelector(getpost);
  const allcomment = useSelector(getcomment);

  const postElements = post.map(post => {
    const comment = allcomment
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
