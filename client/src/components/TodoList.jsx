import React from "react";
import "../styles/todoList.css";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import TodoItem from "./TodoItem";

function TodoList() {
  return (
    <div className="main">
      <div className="button">
        <button className="btn btn-primary btn-color">Add Task</button>
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
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </Stack>
    </div>
  );
}

export default TodoList;
