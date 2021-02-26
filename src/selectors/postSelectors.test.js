import { getpost } from './postSelectors';

describe('post selectors', () => {
  it('selects the post from state', () => {
    const state = {
      post: {
        post: {
          '0': {
            title: 'life and stuff',
            body: 'things and stuff about life and stuff'
          }
        }
      }
    };

    const post = getpost(state);

    expect(post).toEqual([{
      index: '0',
      title: 'life and stuff',
      body: 'things and stuff about life and stuff'
    }]);
  });
});
