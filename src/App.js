import React, { Component } from "react";
import Pitch from "./Components/Pitch/Pitch";
import "./App.scss";

class App extends Component {
  state = {
    players: [
      { name: "Buffon" },
      { name: "Lahm" },
      { name: "Chiellini" },
      { name: "Ramos" },
      { name: "Marcelo" },
      { name: "Kante" },
      { name: "Messi" },
      { name: "Modric" },
      { name: "Neymar" },
      { name: "Aguero" },
      { name: "Ronaldo" }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>Ultimate Team App</h1>
        <Pitch players={this.state.players} />
      </div>
    );
  }
}

export default App;
