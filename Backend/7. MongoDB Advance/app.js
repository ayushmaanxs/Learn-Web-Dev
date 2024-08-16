const express = require("express");
const app = express();
const userModel = require("./models/user");

const dummyData = [
  {
    username: "ayushmaan123",
    name: "Ayushmaan Shandilya",
    password: "password123",
    age: "20",
    isMarried: false,
    email: "ayushmaan123@example.com",
  },
  {
    username: "khushi_bhardwaj",
    name: "Khushi Bhardwaj",
    password: "khushi_b123",
    age: "18",
    isMarried: false,
    email: "khushi_bhardwaj@example.com",
  },
  {
    username: "khushi98",
    name: "Khushi Verma",
    password: "khushi_pass98",
    age: "21",
    isMarried: false,
    email: "khushi98@example.com",
  },
  {
    username: "raj_kumar",
    name: "Raj Kumar",
    password: "raj@kumar01",
    age: "22",
    isMarried: false,
    email: "raj_kumar@example.com",
  },
  {
    username: "shivani_23",
    name: "Shivani Gupta",
    password: "shivani@gupta23",
    age: "21",
    isMarried: true,
    email: "shivani_23@example.com",
  },
  {
    username: "vikas34",
    name: "Vikas Singh",
    password: "vikas1234",
    age: "23",
    isMarried: false,
    email: "vikas34@example.com",
  },
  {
    username: "ananya98",
    name: "Ananya Sharma",
    password: "ananya_98",
    age: "20",
    isMarried: false,
    email: "ananya98@example.com",
  },
  {
    username: "rahul_shetty",
    name: "Rahul Shetty",
    password: "rahul_s123",
    age: "24",
    isMarried: true,
    email: "rahul_shetty@example.com",
  },
  {
    username: "riya_das",
    name: "Riya Das",
    password: "riya@das98",
    age: "22",
    isMarried: false,
    email: "riya_das@example.com",
  },
  {
    username: "manish_raj",
    name: "Manish Raj",
    password: "manish@r123",
    age: "25",
    isMarried: true,
    email: "manish_raj@example.com",
  },
  {
    username: "neha_sinha",
    name: "Neha Sinha",
    password: "neha1234",
    age: "23",
    isMarried: false,
    email: "neha_sinha@example.com",
  },
  {
    username: "akash_26",
    name: "Akash Mehra",
    password: "akash@26",
    age: "26",
    isMarried: false,
    email: "akash_26@example.com",
  },
  {
    username: "sneha_k",
    name: "Sneha Kapoor",
    password: "sneha@k123",
    age: "24",
    isMarried: true,
    email: "sneha_k@example.com",
  },
  {
    username: "deepak_gupta",
    name: "Deepak Gupta",
    password: "deepak1234",
    age: "27",
    isMarried: true,
    email: "deepak_gupta@example.com",
  },
  {
    username: "ravi_s",
    name: "Ravi Sharma",
    password: "ravi_123",
    age: "22",
    isMarried: false,
    email: "ravi_s@example.com",
  },
  {
    username: "megha_jain",
    name: "Megha Jain",
    password: "megha@j123",
    age: "21",
    isMarried: false,
    email: "megha_jain@example.com",
  },
];

app.get("/", (req, res) => {
  res.send("Working");
});

// Insert Many Operator
app.get("/createmany", async (req, res) => {
  let data = await userModel.insertMany(dummyData);
  // dummyData arrray ka sara object db me jake insert ho jayega or data name ke aroow me store ho jayega
  res.send(data);
});

// Equal Operator --> filtering data by exact matches --> $eq
app.get("/equalUsers", async (req, res) => {
  // let users = await userModel.find({age:21});
  //jitne bhi ka age 21 hoga db me wo sarekaa ek array receive ho jayega users me
  let users = await userModel.find({ age: { $eq: 21 } });
  // $ states that it is an operator not a normal field value
  res.send(users);
});

// Not Equal Operator --> filtering data by excluding values ---> $ne
app.get("/notEqualUsers", async (req, res) => {
  let users = await userModel.find({ age: { $ne: 21 } });
  //jitne bhi ka age 21 nhi hoga db me wo sarekaa ek array receive ho jayega users me
  res.send(users);
});

// Less than Operator --> filtering data by numeric comparison ---> $lt
app.get("/lessUsers", async (req, res) => {
  let users = await userModel.find({ age: { $lt: 22 } });
  //jitne bhi ka age 22 se kam hoga db me wo sarekaa ek array receive ho jayega users me
  res.send(users);
});

// Less than or equal to Operator --> filtering data by numeric comparison ---> $lte
app.get("/lessEqualUsers", async (req, res) => {
  let users = await userModel.find({ age: { $lte: 22 } });
  //jitne bhi ka age 22 se kam hoga ya 22 ke equal hoga db me wo sarekaa ek array receive ho jayega users me
  res.send(users);
});

// Greater than Operator --> filtering data by numeric comparison ---> $gt
app.get("/greaterUsers", async (req, res) => {
  let users = await userModel.find({ age: { $gt: 22 } });
  //jitne bhi ka age 22 se jyda hoga db me wo sarekaa ek array receive ho jayega users me
  res.send(users);
});

// Greater than or equal to Operator --> filtering data by numeric comparison ---> $gte
app.get("/lessEqualUsers", async (req, res) => {
  let users = await userModel.find({ age: { $gte: 22 } });
  //jitne bhi ka age 22 se jyda hoga ya 22 ke equal hoga db me wo sarekaa ek array receive ho jayega users me
  res.send(users);
});

// In operator --> filtering data by multiple values --> $in
app.get("/inUsers", async (req, res) => {
  let users = await userModel.find({ age: { $in: [18, 20, 21] } });
  //jitne bhi ka age 18,20,21 hoga sarekaa ek array receive ho jayega users me
  res.send(users);
});

// Not In operator --> filtering data by excluding multiple values --> $nin
app.get("/notInUsers", async (req, res) => {
  let users = await userModel.find({ age: { $nin: [18, 20, 21] } });
  //jitne bhi ka age 18,20,21 nhi hoga sarekaa ek array receive ho jayega users me
  res.send(users);
});

// Exists operator --> filtering data by field existance --> $exists
app.get("/existUsers", async (req, res) => {
  let users = await userModel.find({ isAdmin: { $exists: true } });
  //jitne bhi me isAdmin field defined hoga db me wo sarekaa ek array receive ho jayega users me
  res.send(users);
});

// And & Or Operator --> Combining conditions for advance data handling

app.get("/users", async (req, res) => {
  let users = await userModel.find({
    $or: [{ isMarried: false }, { age: { $gte: 21 } }]
  });
  res.send(users);
});

//Regex Operator
app.get("/regexUsers", async (req, res) => {
  let users = await userModel.find({ name: { $regex: /^K.*j$/i } });
  res.send(users);
});

app.listen(3000);
