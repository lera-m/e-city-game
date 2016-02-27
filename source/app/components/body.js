'use strict';

var React = require('react'),
    Title = require('./title');

module.exports = React.createClass({

    getInitialState: function () {
        return {
            result: 0,
            operator: '=',
            display: 0
        };
    },

    componentDidMount: function () {
        console.info('Hi, I have been successfully mounted!');
    },

    handleClick0: function () {
        this.handleNumber('0');
    },

    handleClick1: function () {
        this.handleNumber('1');
    },

    handleClick2: function () {
        this.handleNumber('2');
    },

    handleClick3: function () {
        this.handleNumber('3');
    },

    handleClick4: function () {
        this.handleNumber('4');
    },

    handleClick5: function () {
        this.handleNumber('5');
    },

    handleClick6: function () {
        this.handleNumber('6');
    },

    handleClick7: function () {
        this.handleNumber('7');
    },

    handleClick8: function () {
        this.handleNumber('8');
    },

    handleClick9: function () {
        this.handleNumber('9');
    },

    handleClickPlus: function () {
        this.handleOperator('+');
    },

    handleClickMinus: function () {
        this.handleOperator('-');
    },

    handleClickMultiply: function () {
        this.handleOperator('*');
    },

    handleClickDivide: function () {
        this.handleOperator('/');
    },

    handleClickResult: function () {
        this.handleOperator('=');
    },

    handleNumber: function (number) {
        this.setState({
            display: parseInt(this.state.display + number)
        });
    },

    handleOperator: function (operator) {
        var result;

        if (this.state.operator === '+') {
            result = this.state.result + this.state.display;
        } else if (this.state.operator === '-') {
            result = this.state.result - this.state.display;
        } else if (this.state.operator === '*') {
            result = this.state.result * this.state.display;
        } else if (this.state.operator === '/') {
            result = this.state.result / this.state.display;
        } else if (this.state.operator === '=' && operator !== '=') {
            result = this.state.display;
        } else {
            result = this.state.result;
        }

        this.setState({
            result: result,
            operator: operator,
            display: 0
        });
    },

    render: function () {
        return (
            <div>
                <div>
                    {this.state.display || this.state.result}
                </div>
                <div>
                    <button onClick={this.handleClick0}>0</button>
                    <button onClick={this.handleClick1}>1</button>
                    <button onClick={this.handleClick2}>2</button>
                    <button onClick={this.handleClick3}>3</button>
                    <button onClick={this.handleClick4}>4</button>
                    <button onClick={this.handleClick5}>5</button>
                    <button onClick={this.handleClick6}>6</button>
                    <button onClick={this.handleClick7}>7</button>
                    <button onClick={this.handleClick8}>8</button>
                    <button onClick={this.handleClick9}>9</button>
                </div>
                <div>
                    <button onClick={this.handleClickPlus}>+</button>
                    <button onClick={this.handleClickMinus}>-</button>
                    <button onClick={this.handleClickMultiply}>*</button>
                    <button onClick={this.handleClickDivide}>/</button>
                    <button onClick={this.handleClickResult}>=</button>
                </div>
            </div>
        );
    }
});
