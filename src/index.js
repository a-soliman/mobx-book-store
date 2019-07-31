import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Store from './stores/Store';

const Root = (
  <Provider Store={Store}>
    <App />
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
serviceWorker.unregister();
