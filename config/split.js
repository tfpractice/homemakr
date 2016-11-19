// exports.devServer = function(options) {     return {         devServer: {
//         // Enable history API fallback so HTML5 History API based routing
// works. This is             // a good default that will come in handy in more
// complicated setups.             historyApiFallback: true,             //
// Unlike the cli flag, this doesn't set HotModuleReplacementPlugin!
// hot: true,             inline: true,             // Display only errors to
// reduce the amount of output.             stats: 'errors-only',             //
// Parse host and port from env to allow customization.             //
//   // If you use Vagrant or Cloud9, set host: options.host || '0.0.0.0';
//       //             // 0.0.0.0 is available to all network devices unlike
// default `localhost`.             host: options.host, // Defaults to
// `localhost`             port: options.port         }, // Defaults to 8080
//     plugins: [             // Enable multi-pass compilation for enhanced
// performance in larger projects.             // Good default.             new
// webpack.HotModuleReplacementPlugin({multiStep: true}),         ]     }; };
//
// const path = require('path'); const HtmlWebpackPlugin =
// require('html-webpack-plugin');
//
// const PATHS = {     app: path.join(__dirname, 'app'),     build:
// path.join(__dirname, 'build') };
//
// module.exports = {     // Entry accepts a path or an object of entries. We'll
// be using the latter form     // given it's convenient with more complex
// configurations.     entry: {         app: PATHS.app     },     output: {
//    path: PATHS.build,         filename: '[name].js'     },     plugins: [new
// HtmlWebpackPlugin({title: 'Webpack demo'})] };
