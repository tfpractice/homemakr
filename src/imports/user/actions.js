import {AUTH_ACTIONS} from './constants'
// There are three possible states for our login process and we need actions for
// each of them
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

const load = () => (state) => ({
    ...state,
    loading: true
})

const loadSuccess = (user) => (state) => ({
    ...state,
    loading: false,
    loaded: true,
    user
})

const loadFail = (loadError) => (state) => ({
    ...state,
    loading: false,
    loaded: false,
    loadError
})

const login = () => (state) => ({
    ...state,
    loggingIn: true
})

const loginSuccess = (user) => (state) => ({
    ...state,
    loggingIn: false,
    user
})
const loginFail = (loginError) => (state) => ({
    ...state,
    loggingIn: false,
    user: null,
    loginError
})

const register = () => (state) => ({
    ...state,
    registering: true
})

const registerSuccess = (user) => (state) => ({
    ...state,
    registering: false,
    user
})

const registerFail = (registerError) => (state) => ({
    ...state,
    signingUp: false,
    user: null,
    registerError
})

const logout = () => (state) => ({
    ...state,
    loggingOut: true
})
const logoutSuccess = (user) => (state) => ({
    ...state,
    loggingOut: false,
    user: null
})
const logoutFail = (logoutError) => (state) => ({
    ...state,
    loggingOut: false,
    logoutError
})

export function isLoaded(globalState) {
    return globalState.auth && globalState.auth.loaded;
}

export function load() {
    return {
        types: [
            LOAD, LOAD_SUCCESS, LOAD_FAIL
        ],
        promise: (client) => client.get('/me')
    };
}

export function login(email, password) {
    return {
        types: [
            LOGIN, LOGIN_SUCCESS, LOGIN_FAIL
        ],
        promise: (client) => client.post('/login', {
            data: {
                email: email,
                password: password
            }
        })
    };
}
const register = (email, password) => (dispatch) => axios.post('/register', {email, password}).then((value) => {})

export function signup(email, password) {
    return {
        types: [
            SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAIL
        ],
        promise: (client) => client.post('/signup', {
            data: {
                email: email,
                password: password
            }
        })
    };
}

export function logout() {
    return {
        types: [
            LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL
        ],
        promise: (client) => client.get('/logout')
    };
}
