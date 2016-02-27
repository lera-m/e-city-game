'use strict';

module.exports = function () {
    var webpack = require('webpack'),
        WebpackDevServer = require('webpack-dev-server'),

        webpackConfig = require('../../../webpack.config'),

        host = 'http://localhost:' + process.env.WEBPACK_PORT,

        server;

    webpackConfig.output.publicPath = host + '/js/',
    webpackConfig.devtool = 'source-map';

    if (webpackConfig.entry instanceof Array) {
        webpackConfig.entry.push('webpack/hot/dev-server');
    } else {
        webpackConfig.entry = [webpackConfig.entry, 'webpack/hot/dev-server'];
    }

    webpackConfig.module.loaders.push({
        test: /(\.jsx|\.js)$/,
        exclude: (/react-project\/node_modules/),
        loader: 'babel-loader?presets[]=react,presets[]=es2015&cacheDirectory'
    });

    // Explicit enable hot module replace
    webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

    // Create webpack server
    server = new WebpackDevServer(webpack(webpackConfig), {

        // webpack-dev-server options
        contentBase: host,

        // webpack-dev-middleware options
        quiet: true,
        noInfo: false,

        // Watching mode
        watchOptions: {
            aggregateTimeout: 300
        },
        publicPath: host + '/js/',
        stats: {
            colors: true
        }
    });

    // Start server listening
    server.listen(process.env.WEBPACK_PORT, 'localhost', function () {
        console.log('>> Webpack development server started on port'.grey, process.env.WEBPACK_PORT.grey);
    });

};
