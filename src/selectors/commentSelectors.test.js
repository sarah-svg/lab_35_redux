import { getcomment } from './commentSelectors';

describe('comment selectors', () => {
  
  it('selects the comment', () => {
    const state = {
      comment: {
        comment: [{
          comment: 'wow'
        }]
      }
    };
    

    const comment = getcomment(state);

    expect(comment).toEqual([{ 
      comment: 'wow'
    }]);
  });
});

