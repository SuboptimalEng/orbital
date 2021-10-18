import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './renderer/App';

import { Provider } from 'react-redux';
import { store } from './renderer/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
