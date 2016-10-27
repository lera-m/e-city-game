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
        options: {
            globals: {
                define: true
            }
        },
        files: {
            src: [
                'source/**/*.json'
            ]
        }
    }
};
