import { combineReducers, } from 'redux';
import { reducer as form, } from 'redux-form';
import { reducer as tasksReducer, taskData as tasks, } from './modules/tasks';
import { reducer as auth, } from './modules/auth';

export default combineReducers({ form, tasks, tasksReducer, auth, });
