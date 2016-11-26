import React from 'react';
import { Route, IndexRoute, } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Main, Home, } from './components';
import { Login, Register, } from './auth';

injectTapEventPlugin();
const logEnter = (nextState, replace) => {
  console.log('now entering new Route');
  console.log(nextState);
};

const logChange = (prevState, nextState, replace, ) => {
  console.log('now changing Route from');
  console.log(nextState);
  console.log('to');
  console.log(nextState);
};

const logLeave = (prevState, ...args) => {
  console.log('now leaving new Route');
  console.log(prevState);
};

const Root = (
  <Route name="app" component={Main} path="/">
    <IndexRoute component={Home} />
    <Route
      path="register" component={Register} onEnter={logEnter}
      onChange={logChange} onLeave={logLeave}
    />
    <Route path="login" component={Login} />
  </Route>

);

export default Root;
