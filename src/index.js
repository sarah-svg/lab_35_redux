import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/App';
import store from './store';
// import { PostProvider } from './state/PostProvider';

// render(
//   <PostProvider><App /></PostProvider>,
//   document.getElementById('root')
// );
render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
