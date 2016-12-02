import { reducer as form, } from 'redux-form';
import { combineReducers, applyMiddleware, } from 'redux';
import { reducer as tasks, tasksReducer, } from './modules/tasks';
import { reducer as auth, } from './modules/auth';

export default combineReducers({ form, tasks, tasksReducer, auth, });
