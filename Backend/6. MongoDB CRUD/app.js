const express = require("express");
const app = express();
const mongooseconnection = require("./config/mongoose");
const userModel = require("./models/user");
const debuglog = require("debug")("development:mongooseconfig");

app.get("/", function (req, res, next) {
  res.send("hey");
});

// Inserting data in our database

app.get("/create", async function (req, res, next) {
  let createdUser = await userModel.create({
    name: "John",
    email: "exelliazomato@mailsed.com",
    password: "helo@125",
    age: "109"
  });

  debuglog("user Created");
  res.send(createdUser);
});

//Reading data from our database

app.get("/read", async function (req, res, next) {

    let user = await userModel.findOne({
        name: "John"});
        debuglog("Readed the data");
        res.send(user);

        // reading everything in an array present in db 
        // let sareUser = await userModel.find();
        // res.send(sareUser);
})

//Updating data from our database

app.get("/update", async function (req, res, next) {
  let user = await userModel.findOneAndUpdate({
    name: "John",
  },{name:"khushi"},{new:true});

  debuglog("user deleted");
  res.send(user);
});

//Deleting data from our database

app.get("/delete", async function (req, res, next) {
  let user = await userModel.findOneAndDelete({
    name: "John",
  })

  debuglog("user deleted");
  res.send(user);
});

app.listen(3000);
