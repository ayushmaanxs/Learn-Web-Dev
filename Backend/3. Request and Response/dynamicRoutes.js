const express = require('express');
const app = express();

app.get("/",function(req,res){
    res.send("Something about main page");
})

// accessing single parameter from dynamic route
app.get("/about/:userName",function(req,res){
    res.send("Something about "+ req.params.userName + "'s page");
})

// accessing multiple parameters from dynamic route
app.get("/about/:userName/:age",function(req,res){
    res.send(`Something about ${req.params.userName}'s page who is of age ${req.params.age}`);
})

app.listen(3000);