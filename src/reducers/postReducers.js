import { CREATE_POST, DELETE_POST } from '../actions/postActions';
import getIndex from '../utilis/getIndex';


export const intialState = {
  post: {}
};

const postReducer = (state = intialState, action) => {
  switch(action.type){
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
    
    
  //  case CREATE_POST:
  //   return {
  //     ...state,
  //     post: [...state.post, action.payload]
  //   };
    

};

export default postReducer;

