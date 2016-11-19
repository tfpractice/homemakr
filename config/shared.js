import webpack from 'webpack';
import validate from 'webpack-validator';
import {PATHS, ROOT_PATH} from './constants';

const common = validate({
    context: ROOT_PATH,
    entry: {
        app: PATHS.app
    },
    resolve: {
        modulesDirectories: [
            'node_modules',
        ],
        extensions: ['', '.js', '.jsx',]
    },
    output: {
        path: PATHS.dist,
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel']
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
    ],
    node: {
        fs: 'empty',
        net: 'mock',
        tls: 'mock',
        dns: 'mock',
        net: 'mock'
    },
});

export default common;
