import React from "react";
import Header from "./components/Header";
import "typeface-roboto";
import "./styles/app.css";

function App() {
  return (
    <div className="App" style={{ fontFamily: "Roboto, sans-serif" }}>
      <Header />
    </div>
  );
}

export default App;
