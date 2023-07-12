import React, { useEffect } from "react";
import "../styles/todoList.css";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import TodoItem from "./TodoItem";
import AddTodoModal from "./AddTodoModal";
import { useQuery } from "react-query";
import { fetchTodos } from "../api/todoApi";

function TodoList() {
  const [modalShow, setModalShow] = React.useState(false);
  const [todos, setTodos] = React.useState([]);

  const { isLoading, refetch } = useQuery({
    queryKey: "todos",
    queryFn: () => fetchTodos(),
    onSuccess: (data) => {
      setTodos(data.data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  useEffect(() => {
    refetch();
  }, 1000);
  return (
    <div className="main">
      <div className="button">
        <button
          className="btn btn-primary btn-color"
          onClick={() => setModalShow(true)}>
          Add Task
        </button>
        <Dropdown as={ButtonGroup}>
          <Button className="btn-large" variant="secondary">
            All
          </Button>

          <Dropdown.Toggle
            split
            variant="secondary"
            id="dropdown-split-basic"
          />

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Done</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Yet To Be Done</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <Stack gap={3} className="stack">
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} />
        ))}
      </Stack>
      <AddTodoModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default TodoList;
