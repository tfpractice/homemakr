export const API_URL = (typeof window === 'undefined' || process.env.NODE_ENV === 'test')
    ? process.env.BASE_URL || (`http://localhost:${process.env.PORT || 3000}/api`)
    : '/api';

export const REGISTER_USER = 'REGISTER_USER';
export const USER_LOGIN = 'REGISTER_USER';
export const USER_LOGOUT = 'REGISTER_USER';
export const REMOVE_USER = 'REGISTER_USER';

export const USER_ACTIONS = new Set([ REGISTER_USER, USER_LOGIN, USER_LOGOUT, REMOVE_USER, ]);

const LOAD = 'LOAD';
const LOAD_SUCCESS = 'LOAD_SUCCESS';
const LOAD_FAIL = 'LOAD_FAIL';
const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
const LOGOUT = 'LOGOUT';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const LOGOUT_FAIL = 'LOGOUT_FAIL';
const SIGNUP = 'SIGNUP';
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const SIGNUP_FAIL = 'SIGNUP_FAIL';

export const AUTH_ACTIONS = new Set([
  LOAD,
  LOAD_SUCCESS,
  LOAD_FAIL,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  SIGNUP,
  SIGNUP_SUCCESS,
]);

const initialState = { loaded: false, };

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
  case LOAD:
    return {
      ...state,
      loading: true,
    };
  case LOAD_SUCCESS:
    return {
      ...state,
      loading: false,
      loaded:  true,
      user:    action.result.user,
    };
  case LOAD_FAIL:
    return {
      ...state,
      loading: false,
      loaded:  false,
      error:   action.error,
    };
  case LOGIN:
    return {
      ...state,
      loggingIn: true,
    };
  case LOGIN_SUCCESS:
    return {
      ...state,
      loggingIn: false,
      user:      action.result.user,
    };
  case LOGIN_FAIL:
    return {
      ...state,
      loggingIn:  false,
      user:       null,
      loginError: action.error,
    };
  case SIGNUP:
    return {
      ...state,
      signingUp: true,
    };
  case SIGNUP_SUCCESS:
    return {
      ...state,
      signingUp: false,
      user:      action.result.user,
    };
  case SIGNUP_FAIL:
    return {
      ...state,
      signingUp:   false,
      user:        null,
      signupError: action.error,
    };
  case LOGOUT:
    return {
      ...state,
      loggingOut: true,
    };
  case LOGOUT_SUCCESS:
    return {
      ...state,
      loggingOut: false,
      user:       null,
    };
  case LOGOUT_FAIL:
    return {
      ...state,
      loggingOut:  false,
      logoutError: action.error,
    };
  default:
    return state;
  }
}

export function isLoaded(globalState) {
  return globalState.auth && globalState.auth.loaded;
}

export function load() {
  return {
    types: [
      LOAD, LOAD_SUCCESS, LOAD_FAIL,
    ],
    promise: client => client.get('/me'),
  };
}

export function login(email, password) {
  return {
    types: [
      LOGIN, LOGIN_SUCCESS, LOGIN_FAIL,
    ],
    promise: client => client.post('/login', {
      data: {
        email,
        password,
      },
    }),
  };
}

export function signup(email, password) {
  return {
    types: [
      SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAIL,
    ],
    promise: client => client.post('/signup', {
      data: {
        email,
        password,
      },
    }),
  };
}

export function logout() {
  return {
    types: [
      LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL,
    ],
    promise: client => client.get('/logout'),
  };
}
