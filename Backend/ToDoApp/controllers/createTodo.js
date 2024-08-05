// Import the model
const Todo = require("../models/Todo");

//define Route Handler
// jab kisi route pe hit hua hoga tabhi hum is controller pe aaye honge
//jis bhi route se yaha tak pauche hai uske liye hume ek route handler likhna parega
// database interaction me sbuch async form me taki humara main thread affect naa ho
exports.createTodo = async (req, res) => {
  try {
    // extract title and description from request ki body
    const { title, description } = req.body;
    // create a new Todo object and insert it in DB
    const response = await Todo.create({ title, description }); // datatbase interaction ho rha hai isliye await ka use kiya hai
    //send a json response with a successful flag
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry Created Successfully",
    });
  } 
  catch (err) {
    console.error(err);
    console.log(err);
    res.status(500) // 500 means internal server error
    .json({ 
        success:false,
        data:"Internal server error",
        message:err.message,
    });
  }
};
