const express = require('express');
const app = express();
app.set('view engine','ejs');

app.get("/",function(req,res){
    res.render("index");
});

app.get("/create",function(req,res){
    res.render("create");
});

app.get("/edit",function(req,res){
    res.render("edit");
});

app.get("/hisaab",function(req,res){
    res.render("show");
});

app.listen(3000);