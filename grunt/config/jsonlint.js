module.exports = {
    all: {
        files: {
            src: [
                '**/*.json',
                '!build/**/*',
                '!node_modules/**/*'
            ]
        }
    },
    source: {
        files: {
            src: [
                'source/**/*.json'
            ]
        }
    }
};
