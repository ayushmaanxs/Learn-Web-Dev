const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//Using data parser
app.use(express.json());

//Connect with DB
const connectWithDb = require("./config/database");

//Route import and mount
const user = require("./routes/user");
app.use("/api/v1", user);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
