var context = require('../../context/context');
module.exports = function(router){
    router.get('/*', function*(){
        var users = yield context.services.UserService.loadAsync();
        yield this.render('index', {users: users});
    })
};