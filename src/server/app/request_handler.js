import React from 'react';
import { renderToString, } from 'react-dom/server';
import { createMemoryHistory, match, RouterContext, } from 'react-router';
import { createStore, applyMiddleware, } from 'redux';
import { Provider, } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { fetchComponentData, root, routes, } from '../../imports';
import { AUTH_ACTIONS, } from '../../imports/auth/constants';

const reducer = root;

const predicate = (getState, { type, }) => AUTH_ACTIONS.has(type);
const collapsed = (getState, action) => action.type;
const logger = createLogger({ collapsed, });

export const renderFullPage = (markup, preloadedState) => `
    <!doctype html>
    <html>
      <head>
        <title>HomeMakr App</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
      </head>
      <body>
        <div id="root">${markup}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
        <script type="application/javascript" src="vendor.bundle.js"></script>
        <script type="application/javascript" src="app.bundle.js"></script>      </body>
    </html>
    `;

export const requestHandler = (req, res) => {
  const location = createMemoryHistory(req.url);

    // Create a new Redux store instance
  const store = applyMiddleware(thunk, logger)(createStore)(reducer);
  match({ routes, location, }, (error, redirectLocation, renderProps) => {
    if (error) {
      console.log(__filename, '\n ========ROUTER ERROR========\n', error);
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      console.log(__filename, '\n ========REDIRECT REQUEST========\n', redirectLocation);
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      console.log(__filename, '\n ========success REQUEST========\n', req.url);

      // Grab the initial state from our Redux store const preloadedState =
      // store.getState(); Render the component to a string
      const markup = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>);

            // Send the rendered page back to the client
      fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
        .then((args) => {
          console.log('=========FETCH COMPONENT THEN ARG  0 ========\n', ...args);
          res.send(renderFullPage(markup, store.getState()));
        }).catch((err) => {
          console.log('=========FETCH COMPONENT CATCH ERRR  0 ========\n', err);
          return res.end(err.message);
        });
    } else {
      res.status(404).send('Not found');
    }
  });
};
