import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Page from './App';
import Reducers from './Reducers'
const store = createStore(Reducers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Page />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


