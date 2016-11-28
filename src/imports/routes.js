import React from 'react';
import { Route, IndexRoute, } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Main, Home, Profile, } from './components';
import { Login, Register, } from './auth';

injectTapEventPlugin();

const logEnter = (nextState, replace) => {
  console.log('now entering new Route');
  console.log(nextState);
};

const logChange = (prevState, nextState, replace,) => {
  console.log('now changing Route from');
  console.log(nextState);
  console.log('to');
  console.log(nextState);
};

const logLeave = (prevState, ...args) => {
  console.log('now leaving new Route');
  console.log(prevState);
};

// const isAuthenticated =(store)=>
const requireLogin = store => (nextState, replace, cb) => {
  const { auth: { user, }, } = store.getState();
  console.log('=======CRUURENT USERS======', user);
  if (!user) {
      // oops, not logged in, so can't be here!
    replace('/');
  }
  cb();
};

const getRoutes = store => (
  <Route name="app" component={Main} path="/">
    <IndexRoute component={Home} />
    <Route
      path="register" component={Register} onEnter={logEnter}
      onChange={logChange} onLeave={logLeave}
    />
    <Route path="login" component={Login} />
    <Route path="profile" component={Profile} onEnter={requireLogin(store)} />
  </Route>

  );

export default getRoutes;
