//Import the model
const Todo = require("../models/Todo");
const todo = require("../models/Todo");

//define route handler

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.json({
      success: true,
      message: "Todo DELETED",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "server error",
    });
  }
};
