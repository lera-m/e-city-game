
const path = require('path');

const config = require('../../webpack.config');

config.output.path = path.resolve('./dist/scripts/');

module.exports = {
    dist: config
};
