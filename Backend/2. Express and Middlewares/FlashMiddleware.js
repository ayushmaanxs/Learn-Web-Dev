const express = require('express');
const app = express();
const expressSession = require('express-session');
const flash = require('connect-flash');

app.use(expressSession({
    secret:"your-secret-key",
    resave:false,
    saveUninitialized:false,
}));
app.use(flash());

app.get("/",function(req,res,next){
    req.flash("error","Invalid Credentials");   // error name se data save kara hai yaha jisme ki content "Invalid Parameters hai"
    res.redirect("/error"); 
})

app.get("/error",function(req,res,next){
    let message = req.flash('error'); // jo bhi data upar save hua use receive kar rahe hai
    res.send(message);
})

app.listen(3000);