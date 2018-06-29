const app = exports = module.exports = {};
const methods = require('methods');
const http = require("http");

app.init = function() {
    this.cache = {};
    this.engine = {};
    this.settings = {};
};
methods.forEach(method => {
    app[method] = path => {
        this.lazyRouter();
        const route = this._router.route(path);
        route[method].apply(route, slice.call(arguments, 1));
        return this
    }
});

app.lazyRouter = function lazyRouter() {
    if(!this._router) {
        this._router = new Router({
            caseSensitive: this.enabled('case sensitive routing'),
            strict: this.enabled('strict routing')
        })
    }
};

app.listen = function listen() {
    var server = http.createServer(this);
    return server.listen.apply(server, arguments);
};

app.handle = function handle(req, res, callback) {
    var router = this._router;

    router.handle(req, res);
};