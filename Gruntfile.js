'use strict';

var path = require('path');

module.exports = function (grunt) {

    grunt.config.set('pkg', require('./package.json'));

    // Load all grunt tasks from node_modules, and config from /grunt/config
    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'grunt/config'),
        config: {
            pkg: grunt.file.readJSON('package.json'),
            srcPath: './app',
            nls: {
                options: {
                    dest: './build/app/public/nls'
                }
            }
        }
    });

    grunt.loadTasks('./grunt/tasks'); // Will load the custom tasks

    grunt.registerTask('test', 'Run tests and lint on dev sources', [
        'jsonlint:source',
        'jshint-jsx:source',
        'jscs:source'
    ]);

    grunt.registerTask('build', 'Build', [
        'copy:build'
    ]);

    grunt.registerTask('server', 'Run the server for development', [
        'clean:build',
        'test',
        'build',
        'shell:server-build'
    ]);

};
