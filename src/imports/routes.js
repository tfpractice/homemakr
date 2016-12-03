import React from 'react';
import { Route, IndexRoute, } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Main, Home, Profile, } from './components';
import { Login, Register, } from './modules/auth';

injectTapEventPlugin();

const logChange = (prevState, nextState, replace,) => {
  console.log('now changing Route from');
  console.log(nextState);
  console.log('to');
  console.log(nextState);
};

const requireLogin = store => (nextState, replace, cb) => {
  const { auth: { user, }, } = store.getState();
  if (!user) {
    replace('/');
  }
  cb();
};
{ /* <Router createElement={createElement}/> */ }

// default behavior
const createElement = (Component, props) => {
  console.log('Component to render', Component);
  console.log('props to render', props);

  // make sure you pass all the props in!
  return <Component {...props} />;
};

const getRoutes = store => (
  <Route name="app" onChange={logChange} component={Main} path="/">
    <IndexRoute component={Home} />

    <Route path="register" component={Register} />
    <Route path="login" component={Login} />

    <Route onEnter={requireLogin(store)}>
      <Route path="profile" component={Profile} />
    </Route>

  </Route>

  );

export default getRoutes;
