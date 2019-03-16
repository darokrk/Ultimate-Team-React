import React, { Component } from "react";
import Pitch from "./Components/Pitch/Pitch";
import "./App.scss";

class App extends Component {
  state = {
    players: [
      { name: "Buffon", number: 1 },
      { name: "Lahm", number: 21 },
      { name: "Chiellini", number: 3 },
      { name: "Ramos", number: 4 },
      { name: "Marcelo", number: 12 },
      { name: "Kante", number: 17 },
      { name: "Messi", number: 10 },
      { name: "Modric", number: 8 },
      { name: "Neymar", number: 11 },
      { name: "Aguero", number: 19 },
      { name: "Ronaldo", number: 7 }
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
