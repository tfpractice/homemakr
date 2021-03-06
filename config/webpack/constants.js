import webpack from 'webpack';
import { resolve, } from 'path';

// const webpack = require('webpack'); config paths
export const ROOT_PATH = resolve('./');
export const SRC_DIR = resolve(ROOT_PATH, 'src');
export const APP_PATH = resolve(SRC_DIR, 'client/index');

export const PATHS = {
  app:  resolve(SRC_DIR, 'client/index'),
  dist: resolve(ROOT_PATH, 'dist'),
};

// respond to npm_lifecycle_event (e.g. "npm run build")
export const DEV = 'dev';
export const BUILD = 'build';
export const CONFIG_EVENTS = new Set([ BUILD, DEV, ]);

export const BUILD_CONFIG =
{ entry: { vendor: [ 'react', 'jquery', 'materialize-css', 'grommet', ], }, };

export const DEV_CONFIG = {
  devtool: 'eval-source-map',
  entry:   {
    app: [
      PATHS.app, 'webpack-hot-middleware/client',
    ],
    // vendor: [ 'react', 'jquery', 'materialize-css', 'grommet', 'webpack-hot-middleware/client', ],
  },
  module: {
    loaders: [
      {
        test:    /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [ 'babel', ],
        query:   BABEL_QUERY,
      },
    ],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV), }, }),
  ],
};

export const BABEL_QUERY = {
  presets: [
    'react', 'latest',
  ],
  plugins: [
        [ 'transform-object-rest-spread', ],
        [ 'transform-class-properties', ],
        [ 'transform-decorators-legacy', ],
    [
      'react-transform', {
        transforms: [
          {
            transform: 'react-transform-hmr',
            imports:   [ 'react', ],
            locals:    [ 'module', ],
          },
        ],
      },
    ],
  ],
};
