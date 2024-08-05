//Instanciate the server
const express = require('express');
const app = express();

//load config from env file
// jo bhi config humne .env file me rkha hai wo sara process object me load ho jayega
require("dotenv").config(); //without it process object won't work

//hmara port number ya toh  process se aayega and agar kisi reason ke karan port number nhi aa paya toh by default we will use port number 4000
//Defining PORT
const PORT = process.env.PORT || 4000;

// controller ke andar request ki body me se humne kuch data parse kiya hai title and description
//or agar humne data parse kiya without any parser toh error aayega
//so we will need middleware to parse json request body
app.use(express.json()); // using express.json() middleware

//import routes for TODO api
const todoRoutes = require ("./routes/todos");

//mount the todo API routes
app.use("/api/v1",todoRoutes);

//start server
app.listen(PORT,()=>{
    console.log(`Server started successfully at ${PORT}`)
})

//Connecting to dataBase
const dbConnect = require("./config/database");
dbConnect();

//default Route --> taki koi route missing ho toh homepage pe redirct ho jaye automatically
app.get("/",(req,res) => {
    res.send(`<h1>This is HOMEPAGE baby</h1>`)
})
