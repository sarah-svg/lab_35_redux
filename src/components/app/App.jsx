import React from 'react';
import PostForm from '../form/PostForm';
import PostList from '../post/PostList';
import styles from './Form.css';

function App() {

  return (
    
    <div  className={styles.Form}>
      <h1>Blog</h1>
      <PostForm />
      <PostList />
    </div>
  );
}
export default App;
