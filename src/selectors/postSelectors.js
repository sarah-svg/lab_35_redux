export const getpost = state => {
  const post = state.post.post;
  const indices = Object.keys(post);

  return indices.map(index => {
    return {
      index, 
      ...post[index]
    };
  });
};

export const countpost = state => getpost(state).length;
