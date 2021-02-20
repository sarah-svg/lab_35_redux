import { getPost } from './postSelectors';

describe('post selector', () => {
  it('uses the post selector', () => {
    const state = {
      post: {
        post:
      [{ post: 'hey', index: 1 }] 
      }
    };
    const post = getPost(state);

    expect(post).toEqual([{ post: 'hey', index: 1 }]);
  });
});
// 
