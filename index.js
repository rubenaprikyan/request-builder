'use strict';

const Auth = require('./build/Auth');

module.exports = (port) => {
    return new Auth(port);
};

