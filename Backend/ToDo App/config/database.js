const mongoose = require("mongoose");
//Run npm i dotenv
require("dotenv").config();

// we created a function which does the connection between node js application and database
const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connection is succesful"))
    .catch((error) => {
      console.log("Issue in DB Connection");
      console.error(error.message);
      process.exit(1);
    });
};
// we exported that function 
module.exports = dbConnect;
