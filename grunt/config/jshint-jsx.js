module.exports = {
    all: {
        options: {
            jshintrc: '.jshintrc',
            convertJSX: 'js'
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
            jshintrc: '.jshintrc',
            convertJSX: 'js'
        },
        files: {
            src: [
                'source/**/*.js'
            ]
        }
    }
};
