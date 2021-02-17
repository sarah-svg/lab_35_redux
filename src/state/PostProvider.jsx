import React, { createContext, useContext, useReducer } from 'react';
import postReducer, { intialState } from '../reducers/postReducers';

const PostContext = createContext(null);

export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, intialState);

  return (
    <PostContext value={{ state, dispatch }}>
      {children}
    </PostContext>
  );

};
