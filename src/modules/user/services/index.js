var Promise = require('bluebird');
var u = require('../../../app/util');
var context = require('../../../context/context');

var UserService = require('./UserService');

module.exports.UserService = Promise.promisifyAll(new UserService(context));

u.extend(context.services, module.exports);