import React, { Component } from "react";
import Pitch from "./Components/Pitch/Pitch";
import Bench from "./Components/Bench/Bench";
import "./App.scss";
import Header from "./Components/Header/Header";

class App extends Component {
  state = {
    players: [
      { name: "Buffon", number: 1, overall: 88 },
      { name: "Carvajal", number: 21, overall: 88 },
      { name: "Chiellini", number: 3, overall: 91 },
      { name: "Ramos", number: 4, overall: 92 },
      { name: "Marcelo", number: 12, overall: 89 },
      { name: "Kante", number: 17, overall: 91 },
      { name: "Messi", number: 10, overall: 95 },
      { name: "Modric", number: 8, overall: 92 },
      { name: "Neymar", number: 11, overall: 93 },
      { name: "Aguero", number: 19, overall: 90 },
      { name: "Ronaldo", number: 7, overall: 95 }
    ],
    benchPlayers: [
      { name: "Casillas", number: 21, overall: 84 },
      { name: "Bonucci", number: 19, overall: 87 },
      { name: "Pique", number: 31, overall: 88 },
      { name: "Silva", number: 2, overall: 89 },
      { name: "Hazard", number: 14, overall: 91 },
      { name: "Pogba", number: 6, overall: 89 },
      { name: "Lewandowski", number: 33, overall: 91 }
    ],
    pickedPlayers: []
  };

  handleSelectPlayer = player => {
    if (this.state.pickedPlayers.length >= 2) return;
    const pickedPlayers = [...this.state.pickedPlayers];
    pickedPlayers.push(player);
    this.setState({
      pickedPlayers
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Bench
            benchPlayers={this.state.benchPlayers}
            handleSelectPlayer={this.handleSelectPlayer}
            pickedPlayers={this.state.pickedPlayers}
          />
          <Pitch
            players={this.state.players}
            handleSelectPlayer={this.handleSelectPlayer}
            pickedPlayers={this.state.pickedPlayers}
          />
        </div>
      </div>
    );
  }
}

export default App;
