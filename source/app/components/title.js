'use strict';

var React = require('react');

module.exports = React.createClass({

    getDefaultProps: function () {
        return {
            text: 'Title'
        };
    },

    render: function () {
        return (
            <h1>{this.props.text}</h1>
        );
    }
});
