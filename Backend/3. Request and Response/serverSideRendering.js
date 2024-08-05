const express = require('express');
const app = express();

// frontend pe jo show hoga wo ejs ke through hoga
// EJS ko view engine set karte hain
app.set('view engine','ejs');
app.use(express.json());    // taki different libraries support ho

//Middleware to parse URL-encoded bodies
app.use(express.urlencoded({extended:true})); // form support krne ke liye

app.get("/",function(req,res){
    res.render("index"); //render usi ko krte hai jo views folder me available ho
})

app.get("/profile",function(req,res){
    res.render("profile");
})

// Form display karne ke liye route
app.get("/form",function(req,res){
    res.render("getTypeForm");
})

// Form submission handle karne ke liye route
app.get("/getCheck",function(req,res){
    console.log(req.query);
    res.send("Working");
})

// Form display karne ke liye route
app.get("/create",function(req,res){
    res.render("postTypeForm");
})

// Form submission handle karne ke liye route
app.post("/postCheck",function(req,res){
    console.log(req.body);
    res.send("Working");
})

app.listen(3000);