import { numbers } from './numbers';
import { reducer as tasks, tasksReducer } from './tasks';
import { createStore, combineReducers, applyMiddleware } from 'redux';
const rootReducer = combineReducers({ numbers, tasks, tasksReducer });
export default rootReducer;
