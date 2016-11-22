import { numbers } from './numbers';
import { reducer as tasks, tasksReducer } from './tasks';
import { reducer as form } from 'redux-form';
import { createStore, combineReducers, applyMiddleware } from 'redux';
const rootReducer = combineReducers({ numbers, form, tasks, tasksReducer });
export default rootReducer;
