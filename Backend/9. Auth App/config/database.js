const mongoose = require('mongoose');
const debuglog = require("debug")("development:mongooseconfig");
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL);
const connectWithDb = mongoose.connection;

// Handle connection errors
connectWithDb.on("error", function (err) {
    debuglog(err);
  });
  
  // Handle successful connection
  connectWithDb.on("open", function () {
    debuglog("Connected to the database");
    console.log("Connected");
  });
  
  module.exports = connectWithDb;