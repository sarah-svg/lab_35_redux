import { getComment } from './commentSelectors';

describe('comment selector', () => {
  it('uses the comment selecter', () => {
    const state = {
      comment: [{ comment: 'hey you!' }]
    };
    const comment = getComment(state);

    expect(comment).toEqual([{ comment: 'hey you!' }]);
  });
});
