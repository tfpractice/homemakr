import webpack from 'webpack';
import merge from 'webpack-merge';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import {BUILD_CONFIG, DEV_CONFIG,} from './constants';

const extractBundle = ({name, entries,}) => {

    return {
        // Define an entry point needed for splitting.
        entry: {
            [name]: entries
        },
        plugins: [// Extract bundle and manifest files. Manifest is needed for reliable caching.
            new webpack.optimize.CommonsChunkPlugin(name)],
    };
}

export const build = (common) => merge(common, BUILD_CONFIG);
// export const build = (common) => merge(common, BUILD_CONFIG,
// extractBundle({name: 'vendor', entries: ['react']}));
export const dev = (common) => merge(common, DEV_CONFIG);

export const applyHotMiddleware = (compiler) => (app) => {
    app.use(webpackDevMiddleware(compiler, {noInfo: true}));
    app.use(webpackHotMiddleware(compiler));
}
