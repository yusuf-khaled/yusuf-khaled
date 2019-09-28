import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import "./styles/App.css";

function App() {
  return (
    <div className="site">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
