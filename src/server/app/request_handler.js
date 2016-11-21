import path from 'path';
import Express from 'express';
import React from 'react';
import {render} from 'react-dom';
import {renderToString} from 'react-dom/server';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import routes from '../imports/routes';
import {root} from '../imports';

// import {browserHistory, Router,} from 'react-router';

const history = browserHistory;

const reducer = root;
const logger = createLogger({
    collapsed: (getState, action) => action.type
});

const store = applyMiddleware(thunk, logger)(createStore)(reducer, [1, 2, 3,]);
render(
    <Provider store={store}>
    <Router children={routes} history={history}/>
</Provider>, document.getElementById('root'));

function handleRender(req, res) {
    // Create a new Redux store instance
    const store = createStore(counterApp);

    // Render the component to a string
    const html = renderToString(
        <Provider store={store}>
            <App/>
        </Provider>
    );

    // Grab the initial state from our Redux store
    const preloadedState = store.getState();

    // Send the rendered page back to the client
    res.send(renderFullPage(html, preloadedState));
}

function renderFullPage(html, preloadedState) {
    return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `;
}
