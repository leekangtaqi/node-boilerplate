var u = require('../../../app/util');
var context = require('../../../context/context');

var User = require('./User');

module.exports.User = User(context.domainBuilder.main);

u.extend(context.models, module.exports);