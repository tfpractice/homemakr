export const API_URL = (typeof window === 'undefined' || process.env.NODE_ENV === 'test')
    ? process.env.BASE_URL || (`http://localhost:${process.env.PORT || 3000}/api`)
    : '/api';

export const TASK_REQUEST_PENDING = 'TASK_REQUEST_PENDING';
export const TASK_REQUEST_SUCCESS = 'TASK_REQUEST_SUCCESS';
export const TASK_REQUEST_FAILURE = 'TASK_REQUEST_FAILURE';

export const GET_TASKS = 'GET_TASKS';
export const CREATE_TASK = 'CREATE_TASK';
export const INSERT_TASK = 'INSERT_TASK';
export const UPDATE_TASKS = 'UPDATE_TASKS';
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const TASK_REQUEST_ACTIONS = new Set([TASK_REQUEST_PENDING, TASK_REQUEST_SUCCESS, TASK_REQUEST_FAILURE,]);
export const TASK_ACTIONS = new Set([
  GET_TASKS,
  UPDATE_TASKS,
  INSERT_TASK,
  CREATE_TASK,
  EDIT_TASK,
  DELETE_TASK,
]);
