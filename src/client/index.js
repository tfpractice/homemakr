import React from 'react';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
import createLogger from 'redux-logger';
import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { root, routes } from '../imports';

const history = browserHistory;

const logger = createLogger({
  collapsed: (getState, action) => action.type,
});
const reducer = root;
const preloadedState = window.__PRELOADED_STATE__;
const store = applyMiddleware(thunk, logger)(createStore)(reducer, preloadedState);

render(
  <Provider store={store}>
    <Router children={routes} history={history} />
  </Provider>, document.getElementById('root'));
