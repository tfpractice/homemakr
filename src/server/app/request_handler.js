import React from 'react';
import { render } from 'react-dom';
import { renderToString } from 'react-dom/server';
import { createMemoryHistory, match, RouterContext } from 'react-router';
import { fetchComponentData } from '../../imports';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import routes from '../../imports/routes';
import { root } from '../../imports';

const reducer = root;

export const renderFullPage = (markup, preloadedState) => `
    <!doctype html>
    <html>
      <head>
        <title>HomeMakr App</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
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
  const logger = createLogger({
    collapsed: (getState, action) => action.type,
  });

  // Create a new Redux store instance
  const store = applyMiddleware(thunk, logger)(createStore)(reducer);
  match({
    routes,
    location,
  }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
            // Grab the initial state from our Redux store
      const preloadedState = store.getState();
            // Render the component to a string
      const markup = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>);
            // Send the rendered page back to the client
      // fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
      //     .then(() => renderFullPage(markup, preloadedState))
      //     .then(res.end).catch(err => res.end(err.message));

      res.send(renderFullPage(markup, preloadedState));
    } else {
      res.status(404).send('Not found');
    }
  });
};
