// Creating our server
/*
step1: create a folder
step2: move into that folder
step3: npm init -y
step4: open folder using VSCode
step5: npm i express
step6: create server.js
*/

//SERVER INSTANCIATE  
const express = require("express"); //creating an instance of express
const app = express(); // initiated a single instance of express and named 'app'

//used to parse request.body in express --> PUT or POST
const bodyParser = require('body-parser');

//specifically pass JSON data and add it to the request.Body object
app.use(bodyParser.json());

//ACTIVATE SERVER ON PORT NUMBER 8000
app.listen(8000, () => {
  console.log("Server Started at port no. 8000");
});

//CREATING ROUTES
//GET REQUEST
// jab bhi server me hum '/' is wale route pe aayenge i.e., home page pe toh in response we will get the string mentioned below in return
// http://localhost:8000/

app.get('/', (request, response) => {
  response.send("hello Jee , kaise ho saare");
});

//POST REQUEST
// http://localhost:8000/api/cars

app.post('/api/cars', (request, response) => {
  const { name, brand } = request.body;
  console.log(name);
  console.log(brand);
  response.send("Car submitted successfully");
});

//connecting monoDB to server using Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{console.log("Connection Successful")})
.catch((error)=> {console.log("Recieved an error")});