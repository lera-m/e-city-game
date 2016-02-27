'use strict';

var React = require('react'),
    Title = require('./title');

module.exports = React.createClass({

    getInitialState: function () {
        return {
            display: 0
        };
    },

    componentWillMount: function () {
        this.calculator = {
            inputValue: 0,
            inputChain: []
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
        this.handleResult('=');
    },

    handleNumber: function (number) {
        this.calculator.inputValue = parseInt(this.calculator.inputValue + number);

        this.setState({
            display: this.calculator.inputValue
        });
    },

    handleOperator: function (operator) {
        this.calculator.inputChain.push(this.calculator.inputValue);
        this.calculator.inputChain.push(operator);

        this.calculator.inputValue = 0;

        console.log(this.calculator.inputChain);
    },

    handleResult: function () {
        this.calculator.inputChain.push(this.calculator.inputValue);
        this.calculator.inputValue = 0;

        console.log(this.calculator.inputChain);

        var result = this.recursiveResult(this.calculator.inputChain);

        this.setState({
            display: result[0]
        });

        console.log(this.calculator.inputChain);
    },

    recursiveResult: function (chain) {
        var indexMultiply = chain.indexOf('*'),
            indexDivide = chain.indexOf('/'),
            indexPlus = chain.indexOf('+'),
            indexMinus = chain.indexOf('-'),
            multiplyResult,
            divideResult,
            plusResult,
            minusResult;

        // Multiply or divide
        if (indexMultiply > -1 || indexDivide > -1) {

            if (indexMultiply > -1 && indexDivide > -1) {
                // multiply and divide exists

                if (indexMultiply < indexDivide) {
                    // multiply
                    multiplyResult = chain[indexMultiply - 1] * chain[indexMultiply + 1];
                    chain.splice(indexMultiply - 1, 3, multiplyResult);
                } else {
                    // divide
                    divideResult = chain[indexDivide - 1] / chain[indexDivide + 1];
                    chain.splice(indexDivide - 1, 3, divideResult);
                }
            } else if (indexMultiply > -1) {
                // multiply
                multiplyResult = chain[indexMultiply - 1] * chain[indexMultiply + 1];
                chain.splice(indexMultiply - 1, 3, multiplyResult);

            } else if (indexDivide > -1) {
                // divide
                divideResult = chain[indexDivide - 1] / chain[indexDivide + 1];
                chain.splice(indexDivide - 1, 3, divideResult);
            }

            // Continue recursive
            return this.recursiveResult(chain);
        }

        // Plus
        if (indexPlus > -1){
            // Plus
            plusResult = chain[indexPlus - 1] + chain[indexPlus + 1];
            chain.splice(indexPlus - 1, 3, plusResult);

            // Continue recursive
            return this.recursiveResult(chain);
        }

        if (indexMinus > -1){
            // Minus
            minusResult = chain[indexMinus - 1] + chain[indexMinus + 1];
            chain.splice(indexMinus - 1, 3, minusResult);

            // Continue recursive
            return this.recursiveResult(chain);
        }

        return chain;
    },

    render: function () {
        return (
            <div>
                <div>
                    {this.state.display}
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
