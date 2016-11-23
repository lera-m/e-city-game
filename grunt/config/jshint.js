module.exports = {
    options: {
        additionalSuffixes: ['.js']
    },
    all: {
        options: {
            jshintrc: '.jshintrc'
        },
        files: {
            src: [
                '**/*.js',
                '!build/**/*',
                '!node_modules/**/*'
            ]
        }
    },
    source: {
        options: {
            jshintrc: '.jshintrc'
        },
        files: {
            src: [
                'source/**/*.js'
            ]
        }
    }
};
