module.exports = {
    // Run node server from the build directory
    'server-build': {
        options: {
            stdout: true
        },
        command: [
            'cd build',
            'node server',
            'cd ..'
        ].join('&&')
    },
    // Run node server from the src directory
    'server-src': {
        options: {
            stdout: true,
            execOptions: {
                maxBuffer: Infinity
            }
        },
        command: [
            'node server'
        ].join('&&')
    }

};
