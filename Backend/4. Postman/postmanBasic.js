const express = require('express');
const app = express();

app.get("/check",function(req,res){
    res.send("Working");
});
app.put("/check",function(req,res){
    res.send("Working");
});
app.post("/check",function(req,res){
    res.send("Working");
});
app.patch("/check",function(req,res){
    res.send("Working");
});
app.delete("/check",function(req,res){
    res.send("Working");
});
app.listen(3000);