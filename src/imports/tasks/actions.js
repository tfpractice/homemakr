import axios from 'axios';
import * as constants from './constants';
const { API_URL, UPDATE_TASKS, EDIT_TASK, INSERT_TASK, DELETE_TASK } = constants;
const { TASK_REQUEST_PENDING, TASK_REQUEST_SUCCESS, TASK_REQUEST_FAILURE } = constants;

const pending = () => TASK_REQUEST_PENDING;
const success = () => TASK_REQUEST_SUCCESS;
const failure = () => TASK_REQUEST_FAILURE;

const update = newTasks => tasks => newTasks;
const insert = task => tasks => tasks.concat(task);
const edit = task => tasks =>
  tasks.map(t => t.id === task.id ? { ...t, ...task } : t);

const remove = ({ id }) => tasks => tasks.filter(t => t.id !== id);

export const taskRequestSucess = ({ data: { tasks } }) => (dispatch) => {
  console.loÔg('CALLED TASK REQUEST success');
  dispatch({ type: TASK_REQUEST_SUCCESS, curry: success });
  return dispatch(updateTasks(tasks));
};

export const taskRequestFailure = err => (dispatch) => {
  console.error('request failed', err);
  dispatch({ type: TASK_REQUEST_FAILURE, curry: failure });
};

export const getTasks = () => (dispatch) => {
  dispatch({ type: TASK_REQUEST_PENDING, curry: pending });
  return axios.get(`${API_URL}/tasks`)
      .then(res => taskRequestSucess(res)(dispatch))
      .catch(taskRequestFailure);
};

export const insertTask = task => ({ type: INSERT_TASK, curry: insert(task) });

export const createTask = taskProps => dispatch =>
  axios.post(`${API_URL}/tasks`, taskProps)
      .then(({ data: { task } }) => dispatch(insertTask(task)))
      .catch(err => console.error('there was an error in creation', err));

export const updateTasks = tasks => ({ type: UPDATE_TASKS, curry: update(tasks) });
export const updateTask = task => ({ type: EDIT_TASK, curry: edit(task) });

export const editTask = ({ id }) => dispatch => taskProps =>
 axios.patch(`${API_URL}/tasks/${id}`, taskProps)
     .then(({ data: { task } }) => dispatch(updateTask(task)))
     .catch(err => console.error('there was an error in update', err));

export const removeTask = ({ id }) => ({
  type:  DELETE_TASK,
  curry: remove({ id }),
});

export const deleteTask = ({ id }) => dispatch =>
  axios.delete(`${API_URL}/tasks/${id}`)
      .then(({ data: { task } }) => dispatch(removeTask(task)))
      .catch(err => console.error('there was an error in delete', err));
