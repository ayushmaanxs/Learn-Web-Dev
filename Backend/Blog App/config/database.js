// Import mongoose
const mongoose = require("mongoose");
const debuglog = require("debug")("development:mongooseconfig");

// Import dotenv to load env variables i.e., MongoDB URL
require("dotenv").config();

// Connect to MongoDB using the URL from environment variables
mongoose.connect(process.env.DATABASE_URL);

// Get the connection object from mongoose
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
