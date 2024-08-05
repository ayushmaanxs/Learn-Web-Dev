//Import the model
const Todo = require("../models/Todo");
const todo = require("../models/Todo");

//define route handler

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params; // 2nd way for id nikal lo request ke parameters se
    const { title, description } = req.body;
    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updatedAt: Date.now() }
    );
    res.status(200).json({
      success: true,
      data: todo,
      message: `Updated Successfully`,
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
