// eslint-disable-next-line max-len
import { createComment, deleteComment, deletecomment } from '../actions/commentActions';
import reducer from './commentReducer';

describe('comment reducer', () => {
  it('handles the CREATE_COMMENT action', () => {
    const state = {
      comment: []
    };

    const action = createComment({
      index: '1',
      body: 'How was you weekend'
    });

    const updatedState = reducer(state, action);

    expect(updatedState)
      .toEqual({
        comment: [{
          index: '1',
          body: 'How was you weekend'
        }]
      });

  });
});

it('deletes a comment', () => {
  const state = {
    comment: [{
      index: '1',
      body: 'really cool comment'
    }]
  };

  const action = deleteComment('really cool comment');

  const updatedState = reducer(state, action);

  expect(updatedState).toEqual({
    comment: []
  });
});

