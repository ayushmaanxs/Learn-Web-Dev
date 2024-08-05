const express = require('express');
const app = express();
const expressSession = require('express-session');

//secret ke basis pe hi hmara pura session encrypt hota hai so isme kuch unique random non guessable string dale 

app.use(expressSession({
    secret:"your-secret-key",
    resave:false,
    saveUninitialized:false,
}));

app.get("/",function(req,res,next){
    res.send("hey");
})

app.get("/create",function(req,res,next){
    req.session.polo = true;
    res.send("done");
})

app.get("/check",function(req,res,next){
    console.log(req.session.polo);
    res.send("Chala");
})

app.listen(3000);