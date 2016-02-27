'use strict';

var argv = require('optimist').argv,
    express = require('express'),
    hotReload,
    app;

require('tinycolor');

process.env.NODE_ENV = argv['node-env'] || process.env.NODE_ENV || 'development';
process.env.PORT = argv.port || process.env.PORT || 4000;
process.env.WEBPACK_PORT = argv['webpack-port'] || process.env.WEBPACK_PORT || 4040;

if (process.env.NODE_ENV === 'development') {
    // Live-reload JSX component when changed
    hotReload = require('hot-reload');
    hotReload.HotReloader.prototype.log = function () {};
    hotReload.create(require)
        .uncache('*.js')
        .uncache('*.jsx')
        .uncache('.html')
        .watch(__dirname + '/build/node_modules/app')
        .afterReload(function (event) {
            require(event.path);
            console.log('Reloaded:'.grey, event.path.white);
        })
        .start();
}

// Keep the full error stacks
Error.stackTraceLimit = Infinity;

// Create express app
app = express();

// Static files
app.use(express.static(__dirname + '/../app/public'));

app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/public/index.html');
});

if (process.env.NODE_ENV === 'development') {
    // Start webpack server
    require('./webpack-server')();
}

// Start server listen to port
app.listen(process.env.PORT, function () {
    console.log('>> Server running on port %d'.grey, process.env.PORT);
});
