'use strict';
module.exports = {
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
