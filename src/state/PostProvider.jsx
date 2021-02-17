import React, { createContext, useContext, useReducer } from 'react';
import postReducer, { intialState } from '../reducers/postReducers';

const PostContext = createContext(null);

export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, intialState);

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );

};

export const useSelector = selecterFn => {
  const { state } = useContext(PostContext);
  return selecterFn(state);
};



export const useDispatch = () => {
  const { dispatch } = useContext(PostContext);
  return dispatch;
};
