import React from "react";
import Header from "./components/Header";
import "typeface-roboto";
import "./styles/app.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App" style={{ fontFamily: "Roboto, sans-serif" }}>
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
