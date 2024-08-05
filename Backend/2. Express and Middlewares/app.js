// importing express and storing it in a constant named express
const express = require("express");
// jo kuch bhi constant me upar store kiya tha use khol diya humne or app name ke ek alag constant me store kar diya
// app ek constant hai jiske andar express ke sare powers hai
const app = express();
// middleware request ko khud se aage nhi jane deta isliye hum next() use krte hai taki request main route tak jaa sake
app.use(function(req,res,next){
  console.log("hey hello");
  next();
})

// app.get('route',request_handler)
// handler ka mtlb ek function hota hai

app.get("/", function (req, res) {
  res.send("Something about Main Page");
});

app.get("/about", function (req, res) {
  res.send("Something about About Page");
});

// If routes do not match the above ones a default route is shown which is represented by asterik *

app.get("*",function(req,res){
    res.send("If nothing works, I will");
})

app.listen(3000);

// Request handler is also a middleware function