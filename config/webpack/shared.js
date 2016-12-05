import webpack from 'webpack';
import path from 'path';
import validate from 'webpack-validator';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { PATHS, ROOT_PATH, } from './constants';

const Joi = require('webpack-validator').Joi;
const schemaExtension = Joi.object({ sassLoader: Joi.any(), });

const common = validate({
  context: ROOT_PATH,
  entry:   { app: PATHS.app, },
  resolve: {
    modulesDirectories: [ 'node_modules', ],
    extensions: [ '', '.js', '.jsx', '.json', ],
  },
  output: {
    path:       PATHS.dist,
    filename:   '[name].bundle.js',
    publicPath: '/',

  },
  module: {
    loaders: [
      {
        test:    /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [ 'babel', ],
      },
      { test: /\.json$/, loader: 'json-loader', },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass?outputStyle=compressed'), },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"production"', }, }),

    // new webpack.optimize.UglifyJsPlugin({
    //   compress: { warnings: false, },
    //   mangle: { except: [ 'webpackJsonp', ], },
    // }),
    new ExtractTextPlugin('[name].styles.css'),
  ],
  node: {
    fs:  'empty',
    net: 'mock',
    tls: 'mock',
    dns: 'mock',
    net: 'mock',
  },
  sassLoader: {
    includePaths: [
      './node_modules',
    ],
  },
}, { schemaExtension, });

export default common;
