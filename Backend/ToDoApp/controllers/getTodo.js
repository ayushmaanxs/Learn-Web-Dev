// Import the model
const Todo = require("../models/Todo");

// define Route Handler
exports.getTodo = async (req, res) => {
  try {
    //fetch all todo items from database
    const todos = await Todo.find({}); //find() is provided by mongoose library
    // datatbase interaction ho rha hai isliye await ka use kiya hai

    //response
    res.status(200).json({
      success: true,
      data: todos,  // sare todos daal do data ke andar jo bhi humne upar fetch kiya hai
      message: "Entire data has been fetched",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: err.message,
    });
  }
};


//Fetching a single Todo by id
exports.getTodoById = async (req, res) => {
  try {
    // extract todo items based on ID
    const id = req.params.id; // request ke parameters se id lekar aao
    const todo = await Todo.findById({ _id: id }); // _id is the way in which id's are stored in mogodb
    //findById() is provided by mongoose

    //data for given id not found
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No data found with given id",
      });
    }   
    //data for given id found
    res.status(200).json({
      success: true,
      data: todo,
      message: `Todo ${id} data fetched successfully`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: err.message,
    });
  }
};
