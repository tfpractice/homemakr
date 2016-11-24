import { combineReducers, } from 'redux';
import { REGISTRATION_ACTIONS, } from './constants';

const regDefault = { status: null, updatedAt: null, };

export const registration = (state = regDefault, { type, curry, }) =>
  REGISTRATION_ACTIONS.has(type) ? curry(state) : state;

export default combineReducers({ registration, });
