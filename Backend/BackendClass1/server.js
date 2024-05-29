// Creating our server
const express = require('express'); // creating an instance of express
const app = express();  // initiated a single instance of express and named 'app'

app.listen(3000,()=>{
    console.log("server started at port no. 3000")
});

//Creating our first route