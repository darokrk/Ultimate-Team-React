import React, { Component } from "react";
import Pitch from "./Components/Pitch/Pitch";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Ultimate Team App</h1>
        <Pitch />
      </div>
    );
  }
}

export default App;
