import webpack from 'webpack';
import validate from 'webpack-validator';
const Joi = require('webpack-validator').Joi;

const schemaExtension = Joi.object({ sassLoader: Joi.any(), });

import merge from 'webpack-merge';
import wpClean from 'clean-webpack-plugin';
import sharedConf from './shared';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import { BUILD_CONFIG, DEV_CONFIG, PATHS, } from './constants';

const clean = path => ({ plugins: [ new wpClean([ path, ], { root: process.cwd(), }), ], });

export const compile = config => webpack(config);
export const build = (common) => {
  console.log('run build was called');
  return merge(common, BUILD_CONFIG, clean(PATHS.dist));
};

export const dev = (common) => {
  const dConf = validate(merge(common, DEV_CONFIG), { schemaExtension, });
  return dConf;
};

export const applyHotMiddleware = compiler => (app) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('not in production');
    app.use(webpackDevMiddleware(compiler, { noInfo: true, }));
    app.use(webpackHotMiddleware(compiler));
  }

  return app;
};

export const enableHotReload = app => applyHotMiddleware(compile(dev(sharedConf)))(app);
