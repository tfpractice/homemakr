import React from 'react';
import thunk from 'redux-thunk';
import { render, } from 'react-dom';
import createLogger from 'redux-logger';
import { browserHistory, Router, } from 'react-router';
import { Provider, } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, } from 'redux';
import { root, getRoutes, } from '../imports';
import { AUTH_ACTIONS, } from '../imports/modules/auth/constants';
import { FILTER_FUNCS, } from '../imports/modules/tasks/constants';
import { setTaskFilter, } from '../imports/modules/tasks/actions';

import 'grommet/scss/vanilla/index.scss';

const history = browserHistory;
const reducer = root;
const deserializeFilter = ({ tasksReducer: { filter, }, }) => {
  filter.func = FILTER_FUNCS.get(filter.name);
};
const preloadedState = (window.__PRELOADED_STATE__);

const predicate = (getState, { type, }) => AUTH_ACTIONS.has(type);
const collapsed = (getState, action) => action.type;
const logger = createLogger({ collapsed, });

const store = applyMiddleware(thunk)(createStore)(reducer, preloadedState);
store.dispatch(setTaskFilter(preloadedState.tasksReducer.filter.name));

render(
  <Provider store={store}>
    <Router children={getRoutes(store)} history={history} />
  </Provider>, document.getElementById('root'));
