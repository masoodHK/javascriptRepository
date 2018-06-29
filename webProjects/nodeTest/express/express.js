exports = module.exports = createApplication;
const proto  = require('./app');

function createApplication(){
    const app = function(res, req, next) {
        app.handle(req, res, next);
    }

    mixin(app, proto, false);

    app.init();
    return app;
}

proto.handle = function handle(req, res, out) {
    var self = this;
    var stack = self.stack;

    console.log(stack)
}