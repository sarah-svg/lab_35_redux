import { CREATE_POST, DELETE_POST } from '../actions/postActions';


export const intialState = {
  post: []
};

export default function postReducer(state = intialState, action) {
  switch(action.type){
    case CREATE_POST:
      return {
        ...state,
        post: [...state.post, action.payload]
      };
    case DELETE_POST:
      return {
        ...state,
        post: state.post.filter(post => post.title !== action.payload)
      };   
    default:
      return state;
  }
    
    
    
    

}
