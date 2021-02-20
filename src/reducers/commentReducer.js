import { CREATE_COMMENT,
  DELETE_COMMENT,
  DELETE_POST_COMMENT } from '../actions/commentActions';

export const intialState = {
  comment: []
};
// comment: [...state.comment, action.payload]
export default function commentReducer(state = intialState, action){

  switch(action.type) {
    case CREATE_COMMENT:
      return {
        ...state, 
        comment: [...state.comment, action.payload]
      };
  
      
    case DELETE_COMMENT: {
      const comment = state
        .comment
        .filter(comment => comment.body !== action.payload);
  
      return {
        ...state,
        comment
      };
    }
    case DELETE_POST_COMMENT: {
      const comments = state
        .comments
        .filter(comment => comment.index !== action.payload);

      return {
        ...state,
        comments
      };
    }
    default:
      return state;
  }
    
}

