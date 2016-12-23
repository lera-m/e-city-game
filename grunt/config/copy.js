'use strict';
module.exports = {
    dist: {
        files: [{
            expand: true,
            cwd: 'source',
            src: [
                '**/*',
                '!**/*.js'
            ],
            dest: './dist'
        }]
    },
    build: {
        files: [{
            expand: true,
            cwd: 'source',
            src: [
                '**/*',
                '!**/*.js'
            ],
            dest: './build'
        }]
    }
};
