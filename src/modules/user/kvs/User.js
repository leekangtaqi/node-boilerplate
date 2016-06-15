var cbUtil = require('../../../framework/callback');

var Kv = function(context){
    this.context = context;
};

var idToObjKey = function(id){
    return "id:" + id + ":o";
};

Kv.prototype.loadById = function(id, callback){
    var logger = this.context.logger;
    var redis = this.context.redis.main;
    var key = idToObjKey(id);
    // redis.hgetall(key, function(err, result){
    //     cbUtil.logCallback(
    //         err,
    //         'Fail to get platform user by id ' + id + ': ' + err,
    //         'Succeed to get platform user by id ' + id);
    //
    //     if(result){
    //         if(result.posts && typeof result.posts == 'string'){
    //             var posts = result.posts;
    //             try{
    //                 result.posts = JSON.parse(result.posts);
    //             }
    //             catch(e){
    //                 logger.error('Fail to parse posts: ' + posts);
    //                 result.posts = [];
    //             }
    //         }
    //         result.crtOn = result.crtOn && result.crtOn !== 'null' ? new Date(result.crtOn) : null;
    //     }
    //     cbUtil.handleSingleValue(callback, err, result);
    // });
};
module.exports = Kv;