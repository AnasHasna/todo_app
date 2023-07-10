import axios from "axios";

const fetchTodos = async () => {
  return await axios.get("http://localhost:5000/todos");
};

const addTodo = async ({ text }) => {
  return await axios.post("http://localhost:5000/todos", { text });
};

const deleteTodo = async ({ id }) => {
  return await axios.delete(`http://localhost:5000/todos/${id}`);
};

export { fetchTodos, addTodo, deleteTodo };
