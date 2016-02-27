'use strict';

module.exports = JSON.parse(require('fs').readFileSync(__dirname + '/.babelrc').toString());
