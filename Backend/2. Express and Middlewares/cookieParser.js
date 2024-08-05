const express = require('express');
const app = express();
const cookie = require('cookie-parser');

app.get("/",function(req,res,next){
    res.send("hey");
})

app.get("/banned",function(req,res,next){
    res.cookie("banned","true");
    res.send("banned");
})

app.listen(3000);