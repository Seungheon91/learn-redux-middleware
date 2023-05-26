import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import rootReducer from './modules';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
//import loggerMiddleware from './lib/loggerMiddleware';
import { createLogger } from 'redux-logger'

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger))
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
