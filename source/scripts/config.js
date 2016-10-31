/* globals require */

require.config({
    paths: {
        'react': 'https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react',
        'react-dom': 'https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react-dom',
        'react-router': 'https://unpkg.com/react-router/umd/ReactRouter'
    }
});

require(['./app']);
