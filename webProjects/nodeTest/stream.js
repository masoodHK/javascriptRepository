const stream = require('fs');
const http = require('http');
var ReadStream = stream.createReadStream(__dirname + '/testing.txt', 'utf-8');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'})
    ReadStream.pipe(res)
    console.log('requesting: ' + req.url)
}).listen(4500);