const express = require("express");
const app = express();
const mongoose = require(`mongoose`);

mongoose
  .connect(
    "mongodb+srv://testProject:demopass@cluster0.v0fhp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(function () {
    console.log("Connected to database");
  });

app.get("/", function (req, res) {
  res.send("Connection done");
});

app.listen(3000);
