import React from 'react';
import thunk from 'redux-thunk';
import {render} from 'react-dom';
import createLogger from 'redux-logger';
import {browserHistory, Router} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import routes from '../imports/routes';

// import Main from '../imports/components/main'; import { todos } from
// '../imports/todos'; import { reducer as tasks, tasksReducer, requestStatus,
// tasksRequestData } from '../imports/tasks'; import { promiseMiddleware } from
// '../imports/lib'; import { reducer as form } from 'redux-form'; const
// initialState = window.__INITIAL_STATE__; const NUM_ACTIONS = new
// Set([INSERT_NUM])

const numbers = (state = [
    1, 2, 3,
], {type, curry,}) => type === 'INSERT_NUM'
    ? curry(state)
    : state
const history = browserHistory;
const reducer = combineReducers({number});
const logger = createLogger({
    collapsed: (getState, action) => action.type
});

const store = applyMiddleware(thunk, logger)(createStore)(reducer, initialState);
render(
    <Provider store={store}>
    <Router children={routes} history={history}/>
</Provider>, document.getElementById('root'));

//

// render(     <Main/>, document.getElementById('root'));
