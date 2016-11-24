import { reducer as form, } from 'redux-form';
import { numbers, } from './numbers';
import { reducer as tasks, tasksReducer, } from './tasks';
import { reducer as auth, } from './auth';
import { combineReducers, applyMiddleware, } from 'redux';

const rootReducer = combineReducers({
  numbers, form, tasks, tasksReducer, auth,
});

export default rootReducer;
