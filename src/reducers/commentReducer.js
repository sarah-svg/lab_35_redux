import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/commentActions';

export const intialState = {
  comment: []
};

export default function commentReducer(state = intialState, action){

  switch(action.type) {
    case CREATE_COMMENT: 
      return {
        ...state,
        comment: [...state.comment, action.payload]
      };
    case DELETE_COMMENT:
      return {
        ...state,
        comment: state.comment.filter(comment => comment.user != action.payload)
      };
    default: return  state;
  }
    
}
