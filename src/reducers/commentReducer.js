// eslint-disable-next-line max-len
import { CREATE_COMMENT, DELETE_POST_comment, DELETE_COMMENT } from '../actions/commentActions';



export const initialState = {
  comment: []
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_COMMENT:
      return {
        ...state, 
        comment: [...state.comment, action.payload]
      };
    case DELETE_POST_comment: {
      const comment = state
        .comment
        .filter(comment => comment.index !== action.payload);

      return {
        ...state, 
        comment
      };
    }
      
    case DELETE_COMMENT:{
      const comment = state
        .comment
        .filter(comment => comment.body !== action.payload);

   
      
      return {
        ...state, 
        comment
      };
    }
    default:
      return state;
  }
};

export default reducer;
