//Instanciate the server
const express = require('express');
const app = express();

//Load config from .env file
require("dotenv").config();

//Defining PORT
const PORT = process.env.PORT || 5000;

//Using data parser ---> middleware
app.use(express.json());

//Importing Routes
const blog = require("./routes/blog")

//Mount the routes
app.use("/api/v1",blog);

//Connect with Database
const connectWithDb = require("./config/database");

//Start the server
app.listen(PORT,()=> {
    console.log(`Server started at port number ${PORT}`);
})

//Writing default route
app.get("/",(req,res)=>{
    res.send(`<h1>This is my homepage</h1>`);
})