const asyncHandler = require("express-async-handler");
const Todo = require("../models/todoModel");

/**
 * @description add todo
 * @router /todos
 * @method POST
 * @access Public
 */

const addTodo = asyncHandler(async (req, res) => {
  const { text } = req.body;
  if (!text) {
    res.status(400);
    throw new Error("Please enter todo text");
  } else {
    const todo = new Todo({
      text,
    });
    const createdTodo = await todo.save();
    res.status(201).json(createdTodo);
  }
});

/**
 * @description get all todos
 * @router /todos
 * @method GET
 * @access Public
 * @returns {Array} todos
 */

const getTodos = asyncHandler(async (req, res) => {
  try {
    const todos = await Todo.find({}).sort({ createdAt: -1 });
    return res.status(200).json(todos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

/**
 * @description toogle to do done
 * @router /todos/:id
 * @method PUT
 * @access Public
 */

const toggleTodo = asyncHandler(async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (todo) {
      todo.done = !todo.done;
      const updatedTodo = await todo.save();
      return res.status(200).json(updatedTodo);
    } else {
      return res.status(404).json({ message: "Todo not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

/**
 * @description update text todo
 * @router /todos/:id
 * @method PUT
 * @access Public
 */

const updateTodo = asyncHandler(async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (todo) {
      todo.text = req.body.text;
      const updatedTodo = await todo.save();
      return res.status(200).json(updatedTodo);
    } else {
      return res.status(404).json({ message: "Todo not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

/**
 * @description delete todo
 * @router /todos/:id
 * @method DELETE
 * @access Public
 */

const deleteTodo = asyncHandler(async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Todo removed" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = {
  addTodo,
  getTodos,
  toggleTodo,
  updateTodo,
  deleteTodo,
};
