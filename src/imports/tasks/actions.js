import axios from 'axios';
import * as constants from './constants';
const { API_URL, UPDATE_TASKS, EDIT_TASK, INSERT_TASK, DELETE_TASK, } = constants;
const { TASK_REQUEST_PENDING, TASK_REQUEST_SUCCESS, TASK_REQUEST_FAILURE, } = constants;
const { TASK_FILTERS, SET_TASK_FILTER, } = constants;

const pending = () => TASK_REQUEST_PENDING;
const success = () => TASK_REQUEST_SUCCESS;
const failure = () => TASK_REQUEST_FAILURE;

const setFilter = filter => state =>
 TASK_FILTERS.has(filter) ? filter : state;
 
const setTaskFilter = filter =>
 ({ type: SET_TASK_FILTER, curry: setFilter(filter), });

const update = newTasks => tasks => newTasks;
const insert = task => tasks => tasks.concat(task);
const edit = task => tasks =>
  tasks.map(t => t.id === task.id ? { ...t, ...task, } : t);

const remove = ({ id, }) => tasks => tasks.filter(t => t.id !== id);

export const taskRequestSucess = () =>
  ({ type: TASK_REQUEST_SUCCESS, curry: success, });

export const taskRequestFailure = err =>
  ({ type: TASK_REQUEST_FAILURE, curry: failure, });

export const updateTasks = tasks => ({ type: UPDATE_TASKS, curry: update(tasks), });
export const getTasks = () => (dispatch) => {
  dispatch({ type: TASK_REQUEST_PENDING, curry: pending, });
  return axios.get(`${API_URL}/tasks`)
    .then(({ data: { tasks, }, }) =>
      dispatch(taskRequestSucess()) && dispatch(updateTasks(tasks)))
    .catch(taskRequestFailure);
};

export const insertTask = task => ({ type: INSERT_TASK, curry: insert(task), });

export const createTask = taskProps => (dispatch) => {
  console.log('========tasksprops======', taskProps);
  return axios.post(`${API_URL}/tasks`, taskProps)
    .then(({ data: { task, }, }) => dispatch(insertTask(task)))
    .catch(err => console.error('there was an error in creation', err));
};

export const updateTask = task => ({ type: EDIT_TASK, curry: edit(task), });

export const editTask = ({ id, }) => dispatch => taskProps =>
 axios.patch(`${API_URL}/tasks/${id}`, taskProps)
   .then(({ data: { task, }, }) => dispatch(updateTask(task)))
   .catch(err => console.error('there was an error in update', err));

export const removeTask = ({ id, }) => ({
  type:  DELETE_TASK,
  curry: remove({ id, }),
});

export const deleteTask = ({ id, }) => dispatch =>
  axios.delete(`${API_URL}/tasks/${id}`)
    .then(({ data: { task, }, }) => dispatch(removeTask(task)))
    .catch(err => console.error('there was an error in delete', err));
