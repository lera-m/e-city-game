'use strict';
module.exports = {
    build: {
        files: [{
            expand: true,
            cwd: 'source',
            src: ['**/*'],
            dest: './build/node_modules'
        }, {
            expand: true,
            cwd: './',
            src: ['server.js'],
            dest: './build/'
        }]
    }
};
