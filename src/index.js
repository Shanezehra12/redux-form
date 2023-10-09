import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import nameReducer from './reducers/nameReducer';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(nameReducer);

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);