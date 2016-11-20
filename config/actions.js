import webpack from 'webpack';
import merge from 'webpack-merge';
import wpClean from 'clean-webpack-plugin';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import {BUILD_CONFIG, DEV_CONFIG, PATHS} from './constants';

const clean = function(path) {
    return {
        plugins: [new wpClean([path], {root: process.cwd()})]
    };
}

export const build = (common) => merge(common, BUILD_CONFIG, clean(PATHS.dist));
export const dev = (common) => merge(common, DEV_CONFIG);
export const devCompiler = () => webpack(dev(common))
export const applyHotMiddleware = (compiler) => (app) => {
    if (process.env.NODE_ENV !== 'production') {
        app.use(webpackDevMiddleware(compiler, {noInfo: true}));
        app.use(webpackHotMiddleware(compiler));
    }
}
export const enableHotReload = (app) => applyHotMiddleware(devCompiler())(app)
