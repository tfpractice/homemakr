import React from 'react';
import thunk from 'redux-thunk';
import { render, } from 'react-dom';
import createLogger from 'redux-logger';
import { browserHistory, Router, } from 'react-router';
import { Provider, } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, } from 'redux';
import { root, getRoutes, } from '../imports';
import { AUTH_ACTIONS, } from '../imports/auth/constants';
window.jQuery = require('jquery');
window.$ = require('jquery');

// require('materialize-css');

// require("./materialize.min.js");
// window.jQuery = window.$ = $ = require('jquery');
// import Materialize from 'materialize-css';

// require('materialize-loader');

// console.log(Object.keys($));

// $(document).ready(() => {
//   // $('ul.tabs').tabs();
// });

// window.jQuery = require('jquery');
// $('ul.tabs').tabs();
const history = browserHistory;
const reducer = root;
const preloadedState = window.__PRELOADED_STATE__;

const predicate = (getState, { type, }) => AUTH_ACTIONS.has(type);
const collapsed = (getState, action) => action.type;
const logger = createLogger({ collapsed, });

const store = applyMiddleware(thunk,)(createStore)(reducer, preloadedState);

render(
  <Provider store={store}>
    <Router children={getRoutes(store)} history={history} />
  </Provider>, document.getElementById('root'));
