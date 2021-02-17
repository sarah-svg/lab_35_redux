import { CREATE_POST, DELETE_POST } from '../actions/postActions';


export const intialState = {
  post: []
};

export default function postReducer(state, action) {
  switch(action.type){
    case CREATE_POST:
      return {
        ...state,
        post: [...state.post, action.payload]
      };
    case DELETE_POST:
      return {
        ...state,
        post: state.dogs.filter(post => post.post != action.payload)
      };   
    default:
      return state;
  }
    
    
    
    

}
