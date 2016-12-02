export const API_URL = (typeof window === 'undefined' || process.env.NODE_ENV === 'test')
    ? process.env.BASE_URL || (`http://localhost:${process.env.PORT || 3000}/api`)
    : '/api';

const PENDING = 'PENDING';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const STATUS_ACTIONS = [ PENDING, SUCCESS, FAILURE, ];

const asyncActions = prefix =>
  new Set(STATUS_ACTIONS.map(str => `${prefix}_${str}`));

export const REGISTRATION_ACTIONS = asyncActions('REGISTRATION');
export const LOGIN_ACTIONS = asyncActions('LOGIN');
export const LOGOUT_ACTIONS = asyncActions('LOGOUT');

export const SET_USER = 'SET_USER';
export const USER_ACTIONS = new Set([ SET_USER, ]);

export const AUTH_ACTIONS = new Set([
  ...REGISTRATION_ACTIONS,
  ...LOGIN_ACTIONS,
  ...LOGOUT_ACTIONS,
  ...USER_ACTIONS,
]);
