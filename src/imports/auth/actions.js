import axios from 'axios';
import * as CONSTANTS from './constants';

const { API_URL, } = CONSTANTS;
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
  ({ type: 'REGISTRATION_SUCCESS', curry: failure(error), });

export const registerUser = userProps => (dispatch) => {
  dispatch(registerPending());
  return axios.post(`${API_URL}/register`, userProps)
    .then(({ data: { user, }, }) => {
      console.log('=============user created=============', user);
      
      // return user;
      dispatch(registerSuccess(user));
    })
    .catch(err => console.error('there was an error in creation', err));
};

export const loginUser = userProps => dispatch =>
 axios.post(`${API_URL}/login`)
   .then((value, ...rest) => {
     console.log('=============hitting passport=============');
     console.log('=============user logged in=============', Object.keys(value));
     console.log(value);
     dispatch(registerSuccess(value));
    
    //  res.json({ value, });
   })
   .catch((err) => { console.error(err); });
