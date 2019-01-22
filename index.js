'use strict';

const Auth = require('./build/Auth');

module.exports = (port) => new Auth(port);

