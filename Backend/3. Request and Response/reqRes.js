const express = require('express');
const app = express();

// Browser se jo jata hai wo request hota hai
// req is the information of browser
// frontend se backend kuch jaa rha hai toh req

app.get("/",function(req,res){
    console.log(req); //huge hota hai ye
    console.log(params);
    console.log(req.body);
    console.log(req.cookies);
    console.log(req.query);
    console.log(req.ip);
    console.log(req.headers);
    console.log(req.url);
    console.log(req.method);
})

// backend se frontend kuch jaa rha hai toh res

app.listen(3000);