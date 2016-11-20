import webpack from 'webpack';
import merge from 'webpack-merge';
import wpClean from 'clean-webpack-plugin';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import {BUILD_CONFIG, DEV_CONFIG, PATHS,} from './constants';

// const extractBundle = ({name, entries,}) => {
//
//     return {         // Define an entry point needed for splitting. entry: {
//   [name]: entries         },         plugins: [// Extract bundle and manifest
// files. Manifest is needed for reliable caching.   new
// webpack.optimize.CommonsChunkPlugin(name)],     }; }
console.log(process.cwd())
const clean = function(path) {
    return {
        plugins: [new wpClean([path], {
                // Without `root` CleanWebpackPlugin won't point to our project and will fail to
                // work.
                root: process.cwd()
            })]
    };
}

export const build = (common) => merge(common, BUILD_CONFIG, clean(PATHS.dist));
export const dev = (common) => merge(common, DEV_CONFIG);

export const applyHotMiddleware = (compiler) => (app) => {
    app.use(webpackDevMiddleware(compiler, {noInfo: true}));
    app.use(webpackHotMiddleware(compiler));
}
