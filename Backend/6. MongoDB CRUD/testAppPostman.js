const express = require("express");
const app = express();
const mongooseconnection = require("./config/mongoose");
const userModel = require("./models/user");
const debuglog = require("debug")("development:mongooseconfig");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res, next) {
  res.send("hey this is postman");
});

// Creating using postman

app.post("/create", async function (req, res, next) {
  let { name, email, password, username,age} = req.body;
  let createdUser = await userModel.create({
    name,
    username,
    email,
    password,
    age
  });
  res.send(createdUser);
});

// Reading all users using Postman

app.get("/users", async function (req, res, next) {
  let users = await userModel.find();
  res.send(users);
});

// Reading single user using Postman

app.get("/users/:username", async function (req, res, next) {
  let username = req.params.username;
  let user = await userModel.findOne({ username });
  res.send(user);
});

//updating using postman

app.get("/update/:username", async function (req, res, next) {
  let { name, email, username ,age} = req.body;
  let newUser = await userModel.findOneAndUpdate(
    { username: req.params.username },
    { username, name, email,age },
    { new: true }
  );
  res.send(newUser);
});

//Deleting using postman

app.get("/delete/:username", async function (req, res, next) {
  let deletedUser = await userModel.findOneAndDelete({
    username: req.params.username,
  });
  res.send(deletedUser);
});

app.listen(3000);
