// export const getPost = state => state.post.post;

export const getPost = state => {
  const post = state.post.post;
  const indices = Object.keys(post);
  return indices.map(index => {
    return {
      index, 
      ...post[index]
    };
  });
};
export const countPosts = state => getPost(state).length;
