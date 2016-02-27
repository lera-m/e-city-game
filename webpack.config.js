'use strict';

var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: './build/node_modules/app-server',
    output: {
        path: __dirname + '/build/node_modules/app/public/js/',
        publicPath: '/js/',
        filename: 'main.js',
        chunkFilename: '[id]-[chunkhash].js'
    },
    module: {
        loaders: []
    },
    resolve: {
        modulesDirectories: [
            'build/node_modules',
            'node_modules'
        ]
    },
    plugins: [
        new webpack.IgnorePlugin(/\.html$/)
    ]
};
