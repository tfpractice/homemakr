import webpack from 'webpack';
import validate from 'webpack-validator';
import { PATHS, ROOT_PATH, } from './constants';

const common = validate({
  context: ROOT_PATH,
  entry:   { app: PATHS.app, },
  resolve: {
    modulesDirectories: [
      'node_modules',
    ],
    extensions: [
      '', '.js', '.jsx', '.json',
    ],
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
      { test: require.resolve('jquery'), loader: 'expose?jQuery!expose?jquery!expose?$', },
      { test: /\.json$/, loader: 'json-loader', },
      { test: /\.(css|scss)$/, loaders: [ 'style', 'css', 'sass', ], },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&mimetype=application/font-woff', },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file', },

    ],
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"production"', }, }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false, },
      mangle: { except: [ 'webpackJsonp', ], },
    }),
  ],
  node: {
    fs:  'empty',
    net: 'mock',
    tls: 'mock',
    dns: 'mock',
    net: 'mock',
  },
});

export default common;
