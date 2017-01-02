var path = require('path');

module.exports = {
    entry: './source/scripts/bundle.js',
    output: {
        path: path.resolve('./build/scripts/'),
        filename: 'bundle.js',
        sourceMapFilename: '[file].map',
        devtoolLineToLine: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}