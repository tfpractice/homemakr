import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { resolve, } from 'path';

// const webpack = require('webpack'); config paths
export const ROOT_PATH = resolve('./');
export const SRC_DIR = resolve(ROOT_PATH, 'src');
export const APP_PATH = resolve(SRC_DIR, 'client/index');

export const BABEL_QUERY = {
  presets: [
    'latest', 'react',
  ],
  plugins: [
        [ 'transform-object-rest-spread', ],
        [ 'transform-class-properties', ],
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
export const PATHS = {
  app:  resolve(SRC_DIR, 'client/index'),
  dist: resolve(ROOT_PATH, 'dist'),
};

export const DEV = 'dev';
export const BUILD = 'build';
export const CONFIG_EVENTS = new Set([ BUILD, DEV, ]);

export const BUILD_CONFIG =
  {
    entry: { vendor: [ 'react', 'grommet', ], },
    output: { filename:   '[name].[chunkhash].bundle.js', },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false, },
        mangle: { except: [ 'webpackJsonp', ], },
      }),
      new webpack.optimize.CommonsChunkPlugin({ names: [ 'vendor', 'manifest', ], }),
      new ExtractTextPlugin('[name].[chunkhash].styles.css'), ],
  };

export const DEV_CONFIG = {
  devtool: 'eval-source-map',
  entry:   {
    app: [
      PATHS.app, 'webpack-hot-middleware/client',
    ],
    vendor: [ 'react', 'grommet', 'webpack-hot-middleware/client', ],
  },
  module: {
    loaders: [
      {
        test:    /\.jsx?$/,
        exclude: /node_modules/,
        loader:  'babel',
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
