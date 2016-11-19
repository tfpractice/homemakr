const { resolve } = require('path');
const validate = require('webpack-validator');
const webpack = require('webpack');

console.log("path.resolve('src')", resolve('src'));
console.log("path.resolve('__dirname')", resolve(__dirname, '../'));
const ROOT_PATH = resolve('./');
const SRC_DIR = resolve(ROOT_PATH, 'src');
const APP_PATH = resolve(SRC_DIR, 'client/index');

console.log('============SRC_DIR=============');
console.log(SRC_DIR);
console.log('============ROOT_PATH=============');
console.log(ROOT_PATH);
console.log('============APP_PATH=============');
console.log(APP_PATH);

const PATHS = { app: resolve(SRC_DIR, 'client/index'),
    dist: resolve(ROOT_PATH, 'dist'), };

console.log('============APP_PATH=============');
console.log(PATHS.app);

const common = validate({ context: ROOT_PATH,
    // entry: './src/client/index',
    entry: { app: PATHS.app, },
    resolve: { modulesDirectories: [
            'node_modules',
        ],
        extensions: [ '', '.js', '.jsx', ], },
    output: { path: PATHS.dist,
        filename: '[name].bundle.js',
        publicPath: '/', },
    module: { loaders: [
            { test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: [ 'babel' ], },

        ], },
    plugins: [
        new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"production"', }, }),
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false, }, }),
    ],
    node: { fs: 'empty',
        net: 'mock',
        tls: 'mock',
        dns: 'mock',
        net: 'mock'
    }
});
module.exports = common;
