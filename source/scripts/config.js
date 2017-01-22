/* globals require */

require.config({
    paths: {
        'react': 'https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react',
        'react-dom': 'https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react-dom',
        'react-router': 'https://unpkg.com/react-router/umd/ReactRouter',
        'superagent': 'https://cdnjs.cloudflare.com/ajax/libs/superagent/2.3.0/superagent',
        'q': 'https://cdnjs.cloudflare.com/ajax/libs/q.js/1.1.0/q',
        'leaflet': 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.2/leaflet'
    }
});

require(['./app']);
