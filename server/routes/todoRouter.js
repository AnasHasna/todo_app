const todoRouter = require("express").Router();
const {
  addTodo,
  getTodos,
  toggleTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

todoRouter.get("/", getTodos);
todoRouter.post("/", addTodo);
todoRouter.put("/:id", toggleTodo);
todoRouter.patch("/:id", updateTodo);
todoRouter.delete("/:id", deleteTodo);

module.exports = todoRouter;
