import merge from 'webpack-merge';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import {BUILD_CONFIG, DEV_CONFIG} from './constants';

export const build = (common) => merge(common, BUILD_CONFIG);
export const dev = (common) => merge(common, DEV_CONFIG);

export const applyHotMiddleware = (compiler) => (app) => {
    app.use(webpackDevMiddleware(compiler, {noInfo: true}));
    app.use(webpackHotMiddleware(compiler));
}
