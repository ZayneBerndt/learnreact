import React from "react";
import logo from "./logo.svg";
import "./App.css";

import posts from "./components/posts";
import Postform from "./components/Postform";

function App() {
  return (
    <div className="App">
      <Postform />
      <Posts />
    </div>
  );
}

export default App;
