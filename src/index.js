import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './App';
import { GlobalStyle } from './GlobalStyle';
import { store } from 'Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <div>
      <GlobalStyle />
      <App />
    </div>
  </Provider>
);