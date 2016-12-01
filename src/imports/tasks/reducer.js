import { TASK_ACTIONS, TASK_REQUEST_ACTIONS, TASK_FILTER_ACTIONS, } from './constants';
import { combineReducers, } from 'redux';

const defaultState = [];
const initStatus = 'TASK_REQUEST_SUCCESS';

export const requestStatus = (rState = initStatus, { type, curry, }) =>
 TASK_REQUEST_ACTIONS.has(type) ? curry(rState) : rState;

export const tasksRequestData = (state = defaultState, { type, curry, }) =>
  TASK_ACTIONS.has(type) ? curry(state) : state;
export const tasks = tasksRequestData;

export const taskFilter = (rState = 'SHOW_ALL_TASKS', { type, curry, }) =>
 TASK_FILTER_ACTIONS.has(type) ? curry(rState) : rState;

export const tasksReducer =
combineReducers({ tasksRequestData, requestStatus, taskFilter, });
export default tasks;
