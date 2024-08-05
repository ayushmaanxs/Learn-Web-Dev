// We can create servers using http module
// modules are packages of node whereas jo hm npm i krke install krte hai wo hote hai npm ke packages

const http = require('http');

// frontend se kuch aa rha hai means req
// server se kuch jaa raha hai means res

var server = http.createServer(function(req,res){
    res.end("hello server start ho gya");
})

server.listen(3000);

/*
use nodemon to auto-refresh the server
we are instaling nodemon as dev dependecy because we need it only at the time of development
Steps to install nodemon:-

npm init -y
npm i nodemon --save-dev
nodemon app.js
*/
