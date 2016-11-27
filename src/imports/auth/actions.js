import axios from 'axios';
import * as CONSTANTS from './constants';

const { SET_USER, } = CONSTANTS;
export const set = user => () => user;
export const setUser = user => ({ type: SET_USER, curry: set(user), });

const pending = () => () =>
 ({ status: 'pending', updatedAt: Date.now(), message: null, });

const success = user => () =>
 ({ status: 'suceeded', updatedAt: Date.now(), message: 'you are now registered', });

const failure = message => () =>
 ({ status: 'failed', updatedAt: Date.now(), message, });

export const registerPending = () =>
  ({ type: 'REGISTRATION_PENDING', curry: pending(), });

export const registerSuccess = user =>
 ({ type: 'REGISTRATION_SUCCESS', curry: success(user), });

export const registerFailure = error =>
  ({ type: 'REGISTRATION_FAILURE', curry: failure(error), });

export const registerUser = userProps => (dispatch) => {
  dispatch(registerPending());
  return axios.post('/register', userProps)
    .then(({ data: { user, }, }) => dispatch(registerSuccess(user)))
    .catch(({ message, }) => dispatch(registerFailure(message)));
};

export const loginPending = () =>
  ({ type: 'LOGIN_PENDING', curry: pending(), });

export const loginSuccess = user =>
 ({ type: 'LOGIN_SUCCESS', curry: success(user), });

export const loginFailure = error =>
  ({ type: 'LOGIN_FAILURE', curry: failure(error), });

export const loginUser = userProps => (dispatch) => {
  dispatch(loginPending());
  return axios.post('/login', userProps)
    .then(({ data: { user, }, }) =>
      dispatch(loginSuccess(user)) && dispatch(setUser(user)))
    .catch(err => dispatch(loginFailure(err)));
};

export const logoutPending = () =>
({ type: 'LOGOUT_PENDING', curry: pending(), });

export const logoutSuccess = user =>
 ({ type: 'LOGOUT_SUCCESS', curry: success(user), });

export const logoutFailure = error =>
  ({ type: 'LOGOUT_FAILURE', curry: failure(error), });

export const logoutUser = userProps => (dispatch) => {
  dispatch(logoutPending());
  return axios.post('/logout', userProps)
    .then(({ data: { user, }, }) => dispatch(logoutSuccess(user)))
    .catch(err => dispatch(logoutFailure(err)));
};
