import React, { Component } from "react";
import Square from "./Components/Square/Square";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Ultimate Team App</h1>
        <Square />
      </div>
    );
  }
}

export default App;
