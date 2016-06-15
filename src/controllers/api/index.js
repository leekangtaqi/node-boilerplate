var Router = require('koa-router');

module.exports = function(app){
    var router = null;

    router = new Router();
    router.prefix('/api/user');
    require('./user')(router);
    app.use(router.routes());
}