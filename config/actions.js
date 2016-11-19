import merge from 'webpack-merge';
import {CONFIG_EVENTS, BUILD_CONFIG,} from './constants';

export const build = (common) => merge(common, {});
export const dev = (common) => merge(common, {});

export default function(app) {
    // const config = Object.assign(prodCfg,
    const config = {
        devtool: 'inline-source-map',
        entry: [
            'webpack-hot-middleware/client', './client',
        ],
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel',
                    query: BABEL_QUERY,
                },
            ]
        },
        plugins: [
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(process.env.NODE_ENV)
                }
            }),
        ],
    };

    const compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, {noInfo: true}));
    app.use(webpackHotMiddleware(compiler));
}
