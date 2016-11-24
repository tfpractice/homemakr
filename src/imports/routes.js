import React from 'react';
import { Route, IndexRoute, } from 'react-router';
import { Main, Home, } from './components';
import { Login, } from './auth';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const Root = (
  <Route name="app" component={Main} path="/">
    <IndexRoute component={Home} >
      <Route path="login" component={Login} />
    </IndexRoute>

  </Route>

);

export default Root;
