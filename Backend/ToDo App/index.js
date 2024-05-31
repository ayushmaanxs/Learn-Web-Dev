//Instanciate the server
const express = require('express');
const app = express();

//Activate the server
app.listen(3000,()=>{
    console.log("App is running successfully");
})