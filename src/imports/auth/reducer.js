import { combineReducers, } from 'redux';
import { REGISTRATION_ACTIONS, LOGIN_ACTIONS, LOGOUT_ACTIONS,
USER_ACTIONS, } from './constants';

const reqDefault = { status: null, updatedAt: null, message: null, };

export const registration = (state = reqDefault, { type, curry, }) =>
  REGISTRATION_ACTIONS.has(type) ? curry(state) : state;

export const login = (state = reqDefault, { type, curry, }) =>
  LOGIN_ACTIONS.has(type) ? curry(state) : state;

export const logout = (state = reqDefault, { type, curry, }) =>
  LOGOUT_ACTIONS.has(type) ? curry(state) : state;

export const user = (state = {}, { type, curry, }) =>
  USER_ACTIONS.has(type) ? curry(state) : state;

export default combineReducers({ registration, login, logout, user, });
