import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import rootReducer, { rootSaga } from './modules';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
//import loggerMiddleware from './lib/loggerMiddleware';
import { createLogger } from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk, sagaMiddleware))
const root = ReactDOM.createRoot(document.getElementById('root'));

sagaMiddleware.run(rootSaga)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
