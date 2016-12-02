import { reducer as form, } from 'redux-form';
import { reducer as tasks, tasksReducer, } from './modules/tasks';
import { reducer as auth, } from './modules/auth';
import { combineReducers, applyMiddleware, } from 'redux';

const rootReducer = combineReducers({ form, tasks, tasksReducer, auth, });

export default rootReducer;
