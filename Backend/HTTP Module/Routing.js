// ROUTING --> to create alag alag urls or unpe kya hoga ye bhi decide kr skte hai
// '/' is the default route
const http = require('http');

const server = http.createServer(function(req,res){
    if(req.url === '/'){
        res.end("hey");
    }
    else if(req.url === "/profile"){
        res.end("profile page");
    }
    else{
        res.end("page not found");
    }
})

server.listen(3000);