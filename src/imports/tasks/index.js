import * as actions from './actions';
import TasksView from './components';
import reducer, { tasksReducer, } from './reducer';
console.log(__filename, '\n ========TASK DEPEND=====\n', module.parent);

export { actions, reducer, tasksReducer, TasksView, };
