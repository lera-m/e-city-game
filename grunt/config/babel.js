// Compile JSX files into the same directory
var babelConfig = require('../../babel.config');

module.exports = {
    options: {
        sourceMap: true,
        presets: babelConfig.presets
    },

    build: {
        files: [{
            expand: true,
            cwd: './build/node_modules',
            src: [
                '**/*.js'
            ],
            dest: './build/node_modules'
        }]
    }
};
