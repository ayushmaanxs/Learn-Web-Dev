const express = require('express');
const app = express();
const cors = require('cors');
// aloow sharing from all routes
// app.use(cors());

app.get("/",function(req,res,next){
    res.send("hey");
})

// allow sharing from specific route
app.get("/shareable",cors(),function(req,res,next){
    res.send("The data in this route is now sharebale with other domains");
})

app.listen(3000);