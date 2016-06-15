var Router = require('koa-router');

module.exports = function(app){
    var router = new Router();
    require('./spa')(router);
    app.use(router.routes());
}