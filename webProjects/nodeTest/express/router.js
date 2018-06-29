const proto = module.exports = function(options){
    let opts = options || {}

    function router(req,res,next) {
        router.handle(req,res,next)
    }

    setPrototypeOf(router, proto)

    /* express specific, we will go through them in later chapters */
    router.params = {};
    router._params = [];
    router.caseSensitive = opts.caseSensitive;
    router.mergeParams = opts.mergeParams;
    router.strict = opts.strict;
    router.stack = []; //really important property

    return router;
};

proto.route = function route(path) {
    var route = new Route(path)

    var layer = new Layer(path,{
        sensitive: this.caseSensitive,
        strict: this.strict,
        end: true
    },route.dispatch.bind(route))

    layer.route = route;

    this.stack.push(layer);

    return route;
};

function Route(path) {
    this.path = path;
    this.stack = [];

    this.methods = {}
}

methods.forEach(function(method){
    Route.prototype[method] = function(){
        var handles = flatten(Array.prototype.slice.call(arguments));

        for (var i = 0; i < handles.length; i++) {
            var handle = handles[i];

            if (typeof handle !== 'function') {
                var type = toString.call(handle);
                var msg = 'Route.' + method + '() requires a callback function but got a ' + type
                throw new Error(msg);
            }

            var layer = Layer('/', {}, handle);
            layer.method = method;

            this.methods[method] = true;
            this.stack.push(layer);
        }

        return this;
    };
});