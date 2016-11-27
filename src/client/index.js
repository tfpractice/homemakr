import React from 'react';
import thunk from 'redux-thunk';
import { render, } from 'react-dom';
import createLogger from 'redux-logger';
import { browserHistory, Router, } from 'react-router';
import { Provider, } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, } from 'redux';
import { root, routes, } from '../imports';
import { AUTH_ACTIONS, } from '../imports/auth/constants';

const history = browserHistory;
const reducer = root;
const preloadedState = window.__PRELOADED_STATE__;

const predicate = (getState, { type, }) => AUTH_ACTIONS.has(type);
const collapsed = (getState, action) => action.type;
const logger = createLogger({ collapsed, });

const store = applyMiddleware(thunk, logger)(createStore)(reducer, preloadedState);

render(
  <Provider store={store}>
    <Router children={routes} history={history} />
  </Provider>, document.getElementById('root'));
