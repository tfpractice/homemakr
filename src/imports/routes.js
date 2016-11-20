import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {Main, Home,} from './components';

const Root = (
    <Route name="app" component={Main} path="/">
        <IndexRoute component={Home}/>
    </Route>

);

export default Root;
