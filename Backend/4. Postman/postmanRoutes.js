const express = require("express");
const app = express();

var data = [1, 2, 3, 4];

app.get("/", (req, res) => {
  res.send("hey");
});

app.get("/data", (req, res) => {
  res.send(data); // ek array send kar rhe hai
});

app.post("/data/:number", (req, res) => {
  // phle number ka type string tha isliye hum use int bnakr array me push kr rhe hai
  data.push(parseInt(req.params.number));
  res.send(data);
});

app.listen(3000);
