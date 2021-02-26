import { CREATE_POST, DELETE_POST } from '../actions/postActions';
import getIndex from '../utils/getIndex';

export const initialState = {
  post: {}
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_POST: {
      const newIndex = getIndex(state.post);
      const post = { ...state.post };
      post[newIndex] = action.payload;

      return {
        ...state,
        post
      };
    }
      
    case DELETE_POST: {
      const index = action.payload;
      const post = { ...state.post };

      delete post[index];

      return {
        ...state,
        post
      };
    }
    default:
      return state;
  }
};

export default reducer;
