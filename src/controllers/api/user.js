var context = require('../../context/context');

module.exports = function(router){
    router.get('/', function*(){
        try{
            var users = yield context.services.UserService.loadAsync();
            context.logger.info(users);
            this.body = {error: null, user: users};
        }catch (e){
            context.logger.error(e);
            this.body = {error: e}
        }
    });
    router.get('/:id', function*(){
        try{
            var user = yield context.services.UserService.loadByIdAsync(this.params.id);
            context.logger.info(user);
            this.body = {error: null, user: user};
        }catch (e){
            context.logger.error(e)
            this.body = {error: e}
        }
    })
};