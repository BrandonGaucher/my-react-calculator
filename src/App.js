import React from "react";
import "./App.css";
import CalcBody from "./components/CalcBody";

function App() {
  let displayText = [];

  return (
    <div className="App">
      <header>
        <h1>My JS Calculator</h1>
      </header>
      <CalcBody displayText={displayText} />
    </div>
  );
}

export default App;
