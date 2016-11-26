import axios from 'axios';
import * as CONSTANTS from './constants';

const { API_URL, SET_USER, } = CONSTANTS;
export const set = user => state => user;
export const setUser = user => ({ type: SET_USER, curry: set(user), });

const pending = () => state =>
 ({ status: 'pending', updatedAt: Date.now(), });

const success = user => state =>
 ({ status: 'suceeded', updatedAt: Date.now(), });

const failure = error => state =>
 ({ status: 'failed', updatedAt: Date.now(), error, });

const registerPending = () =>
  ({ type: 'REGISTRATION_PENDING', curry: pending(), });

const registerSuccess = user =>
 ({ type: 'REGISTRATION_SUCCESS', curry: success(user), });

const registerFailure = error =>
  ({ type: 'REGISTRATION_FAILURE', curry: failure(error), });

export const registerUser = userProps => (dispatch) => {
  dispatch(registerPending());
  return axios.post('/register', userProps)
    .then(({ data: { user, }, }) => dispatch(registerSuccess(user)))
    .catch(err => dispatch(registerFailure(err)));
};

const loginPending = () =>
  ({ type: 'LOGIN_PENDING', curry: pending(), });

const loginSuccess = user =>
 ({ type: 'LOGIN_SUCCESS', curry: success(user), });

const loginFailure = error =>
  ({ type: 'LOGIN_FAILURE', curry: failure(error), });

export const loginUser = userProps => (dispatch) => {
  dispatch(loginPending());
  return axios.post('/login', userProps)
    .then(({ data: { user, }, }) => {
      dispatch(loginSuccess(user));
      return dispatch(setUser(user));
    })
    .catch(err => dispatch(loginFailure(err)));
};

const logoutPending = () =>
({ type: 'LOGOUT_PENDING', curry: pending(), });

const logoutSuccess = user =>
 ({ type: 'LOGOUT_SUCCESS', curry: success(user), });

const logoutFailure = error =>
  ({ type: 'LOGOUT_FAILURE', curry: failure(error), });

export const logoutUser = userProps => (dispatch) => {
  dispatch(logoutPending());
  return axios.post('/logout', userProps)
    .then(({ data: { user, }, }) => dispatch(logoutSuccess(user)))
    .catch(err => dispatch(logoutFailure(err)));
};
