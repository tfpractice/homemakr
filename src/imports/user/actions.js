import { AUTH_ACTIONS, } from './constants';

// There are three possible states for our login process and we need actions for
// each of them
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

const load = () => state => ({
  ...state,
  loading: true,
});

const loadSuccess = user => state => ({ ...state, loading: false, loaded:  true, user, });

const loadFail = loadError => state => ({ ...state, loading: false, loaded:  false, loadError, });

const login = () => state => ({ ...state, loggingIn: true, });

const loginSuccess = user => state => ({ ...state, loggingIn: false, user, });
const loginFail = loginError => state => ({
  ...state,
  loggingIn: false,
  user:      null,
  loginError,
});

const register = () => state => ({
  ...state,
  registering: true,
});

const registerSuccess = user => state => ({
  ...state,
  registering: false,
  user,
});

const registerFail = registerError => state => ({
  ...state,
  signingUp: false,
  user:      null,
  registerError,
});

export const loginUser = userProps => dispatch =>
 axios.post(`${API_URL}/login`, userProps)
   .then((value) => { console.log(value); })
   .catch((err) => { console.error(err); });

export const registerUser = userProps => dispatch =>
  axios.post(`${API_URL}/register`, userProps)
    .then(({ data: { user, }, }) => {
      console.log('=============user created=============', user);
      
      
        // dispatch(insertUser(user));
    })
    .catch(err => console.error('there was an error in creation', err));

const logout = () => state => ({
  ...state,
  loggingOut: true,
});
const logoutSuccess = user => state => ({
  ...state,
  loggingOut: false,
  user:       null,
});
const logoutFail = logoutError => state => ({
  ...state,
  loggingOut: false,
  logoutError,
});

function isLoaded(globalState) {
  return globalState.auth && globalState.auth.loaded;
}

export const loadRQ = () => ({
  types: [
    LOAD, LOAD_SUCCESS, LOAD_FAIL,
  ],
  promise: client => client.get('/me'),
});

export const loginRQ = (email, password) => ({
  types: [
    LOGIN, LOGIN_SUCCESS, LOGIN_FAIL,
  ],
  promise: client => client.post('/login', {
    data: {
      email,
      password,
    },
  }),
});

const register0 = (email, password) => dispatch => axios.post('/register', { email, password, }).then((value) => {});

export const signupRQ = (email, password) => ({
  types: [
    SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAIL,
  ],
  promise: client => client.post('/signup', {
    data: {
      email,
      password,
    },
  }),
});

export const logoutRQ = () => ({
  types: [
    LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL,
  ],
  promise: client => client.get('/logout'),
});
