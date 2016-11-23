'use strict';

var path = require('path');

module.exports = function (grunt) {

    grunt.config.set('pkg', require('./package.json'));

    // Load all grunt tasks from node_modules, and config from /grunt/config
    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'grunt/config'),
        config: {
            pkg: grunt.file.readJSON('package.json')
        },
        additionalSuffixes: ['.js']
    });

    //grunt.loadTasks('./grunt/tasks'); // Will load the custom tasks

    grunt.registerTask('test', 'Run tests and lint on dev sources', [
        'jsonlint:source',
        'jshint:source'
        //'jscs:source'
    ]);

    grunt.registerTask('build', 'Build', [
        'copy:build',
        'babel:build'
    ]);

    grunt.registerTask('run', 'Dev', [
        'clean:build',
        'build',
        'watch:source'
    ]);
};
