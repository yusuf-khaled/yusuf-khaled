import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import "./styles/App.css";

function App() {
  return (
    <div className="site">
      <Route
        exact
        path={`/`}
        render={routerProps => <Home routerProps={routerProps} />}
      />
    </div>
  );
}

export default App;
