import React from 'react';
import { Route, IndexRoute, } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Main, Home, } from './components';
import { Login, Register, } from './auth';

injectTapEventPlugin();

const Root = (
  <Route name="app" component={Main} path="/">
    <IndexRoute component={Home} />
    <Route path="register" component={Register} />
    <Route path="login" component={Login} />
  </Route>

);

export default Root;
