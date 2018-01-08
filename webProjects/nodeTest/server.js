//dependencies
const http = require('http')
//start of the server
var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end("geeee")
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