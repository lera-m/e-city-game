module.exports = {
    all: {
        options: {
            config: '.jscsrc',
            esnext: true,
            fix: true
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
            config: '.jscsrc',
            esnext: true
        },
        files: {
            src: [
                'source/**/*.js'
            ]
        }
    }
};
