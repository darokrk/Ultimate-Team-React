import React, { Component } from "react";
import Pitch from "./Components/Pitch/Pitch";
import Bench from "./Components/Bench/Bench";
import "./App.scss";
import Header from "./Components/Header/Header";

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
    ],
    benchPlayers: [
      { name: "Cassilas", number: 21 },
      { name: "Bonucci", number: 19 },
      { name: "Chiellini", number: 3 },
      { name: "Silva", number: 2 },
      { name: "Hazard", number: 14 },
      { name: "Pogba", number: 6 },
      { name: "Lewandowski", number: 33 }
    ]
  };
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Bench benchPlayers={this.state.benchPlayers} />
          <Pitch players={this.state.players} />
        </div>
      </div>
    );
  }
}

export default App;
