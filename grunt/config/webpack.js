'use strict';

// Webpack Grunt Task
//
// Extends the main webpack.config.js for the build release.
// Live and beta target won't have source-maps enabled.

module.exports = function (grunt) {
    var webpackConfig = require('../../webpack.config.js'),
        webpack = require('webpack');

    return {
        options: webpackConfig,

        build: {
            context: './build',
            output: {
                path: './build/app/public/js'
            },
            devtool: 'source-map',
            plugins: [
                new webpack.optimize.UglifyJsPlugin({
                    compress: {
                        drop_console: false,
                        dead_code: true
                    }
                })
            ]
        }
    };
};
