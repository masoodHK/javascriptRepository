//dependencies
const http = require('http')
const file = require('fs');
var ReadStream = file.createReadStream(__dirname + '/index.html', 'utf-8');
//start of the server
var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    ReadStream.pipe(res)
    console.log('requesting: ' + req.url)
})
server.listen(4500);
//server initialization message after 3 seconds
var serverCall = setInterval(function(){
    let x = false
    console.log("Server Started")
    x = true
    if(x == true){
        clearTimeout(serverCall)
    }
}, 3000)