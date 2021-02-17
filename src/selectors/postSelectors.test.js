import { getPost } from './postSelectors';

describe('post selector', () => {
  it('uses the post selector', () => {
    const state = {
      post: [{ post: 'hey' }]
    };
    const post = getPost(state);

    expect(post).toEqual([{ post: 'hey' }]);
  });
});
