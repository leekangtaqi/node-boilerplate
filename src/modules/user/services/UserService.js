var co = require('co');

var Service = function(context){
    this.context = context;
};

Service.prototype.load = function(callback) {
    var logger = this.context.logger;
    var User = this.context.models.User;

    co(function* (){
        var mock_users = [];
        mock_users.push(new User({nickname: 'zhangsan'}));
        mock_users.push(new User({nickname: 'lisi'}));
        mock_users.push(new User({nickname: 'wangwu'}));
        var user = yield Promise.resolve(mock_users); // load from db
        callback(null, mock_users);
    }).catch(function(err){
        logger.error('Fail to load users' + err);
        logger.error(err.stack);
        if(callback) callback(err);
    });
};

Service.prototype.loadById = function(id, callback) {
    var logger = this.context.logger;
    var User = this.context.models.User;

    co(function* (){
        var mock_user = new User({nickname: 'zhangsan'});
        var user = yield Promise.resolve(mock_user);  // load from db
        callback(null, user);
    }).catch(function(err){
        logger.error('Fail to load user by id '+id+' : ' + err);
        logger.error(err.stack);
        if(callback) callback(err);
    });
};

module.exports = Service;