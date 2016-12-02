import * as constants from './constants';
import { combineReducers, } from 'redux';

const { TASK_ACTIONS, TASK_REQUEST_ACTIONS, } = constants;
const { FILTER_FUNCS, TASK_FILTER_ACTIONS, SHOW_ALL_TASKS, } = constants;

const defaultState = [];
const initStatus = 'TASK_REQUEST_SUCCESS';
const initFilter =
{ name: SHOW_ALL_TASKS, func: FILTER_FUNCS.get(SHOW_ALL_TASKS), };

const status = (rState = initStatus, { type, curry, }) =>
 TASK_REQUEST_ACTIONS.has(type) ? curry(rState) : rState;

const filter = (fState = initFilter, { type, curry, }) =>
 TASK_FILTER_ACTIONS.has(type) ? curry(fState) : fState;

export const data = (state = defaultState, { type, curry, }) =>
   TASK_ACTIONS.has(type) ? curry(state) : state;

export default combineReducers({ data, status, filter, });
