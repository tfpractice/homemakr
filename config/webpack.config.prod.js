const { resolve } = require('path');
const validate = require('webpack-validator');
const webpack = require('webpack');

console.log("path.resolve('src')", resolve('src'));
console.log("path.resolve('__dirname')", resolve(__dirname, '../'));
const ROOT_PATH = resolve('./');
const SRC_DIR = resolve('src');
console.log('============SRC_DIR=============');
console.log(SRC_DIR);
console.log('============ROOT_PATH=============');
console.log(ROOT_PATH);

module.exports = validate({ context: ROOT_PATH,
    entry: './src/client/index',
    resolve: { modulesDirectories: [
            'node_modules',
        ],
        extensions: ['', '.js', '.jsx', ], },
    output: { path: resolve(ROOT_PATH, 'dist'),
        filename: 'bundle.js',
        publicPath: '/', },
    module: { loaders: [
            { test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: [ 'babel' ], },
            // {     test: /\.css$/,     loaders: [         'style', 'css',     ],
            // },,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
        ], },
    plugins: [
        new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"production"', }, }),
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false, }, }),
    ],
    node: { fs: 'empty',
        net: 'mock',
        tls: 'mock',
        dns: 'mock',
        net: 'mock', }, });
