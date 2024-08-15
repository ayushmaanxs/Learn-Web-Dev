const mongoose = require('mongoose');
const debuglog = require("debug")("development:mongooseconfig");

// instead of console log use dubug log 

mongoose.connect("mongodb://127.0.0.1:27017/testingdb");

const db = mongoose.connection;

db.on("error", function (err) {
  debuglog(err);
}); 

db.on("open",function(){
    debuglog("Connected to the database");
    console.log("Connected");
})

module.exports = db;