'use strict';

var React = require('react'),
    ReactDOM = require('react-dom'),
    Body = React.createFactory(require('./components/body'));

ReactDOM.render(
    new Body({}),

    document.getElementById('reactMountNode'),

    function () {
        console.log('App started');
    }
);
