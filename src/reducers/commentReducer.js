import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/commentActions';

// export const intialState = {
//   comment: []
// };
// comment: [...state.comment, action.payload]
export default function commentReducer(state = {}, action){

  switch(action.type) {
    case CREATE_COMMENT:
      return {
        ...state, 
        comment: [action.payload.comment]
      };
  
      
    case DELETE_COMMENT:
      return {
        ...state,
        comment: state.comment.filter(comment => comment.user != action.payload)
      };
    default: return  state;
  }
    
}
// case CREATE_COMMENT: 
//   return {
//     ...state,
//     [action.payload.postIndex]: [
//       ...(state[action.payload.postIndex] || []),
//       action.payload.comment
//     ]

//     // comment: state.comment.map((comment, i) => {
//     //   if(action.payload.postIndex > state.comment.length - 1)
//     //     return [...comment, action.payload.comment];
//     //   if(i === action.payload.postIndex)
//     //     return [...comment, action.payload.comment];
//     // })
//   };
