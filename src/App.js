import React, { Component } from "react";
import Pitch from "./Components/Pitch/Pitch";
import Bench from "./Components/Bench/Bench";
import "./App.scss";
import Header from "./Components/Header/Header";

class App extends Component {
  state = {
    players: [
      {
        name: "Buffon",
        number: 1,
        overall: 88,
        selected: false
      },
      {
        name: "Carvajal",
        number: 21,
        overall: 88,
        selected: false
      },
      {
        name: "Chiellini",
        number: 3,
        overall: 91,
        selected: false
      },
      {
        name: "Ramos",
        number: 4,
        overall: 92,
        selected: false
      },
      {
        name: "Marcelo",
        number: 12,
        overall: 89,
        selected: false
      },
      {
        name: "Kante",
        number: 17,
        overall: 91,
        selected: false
      },
      {
        name: "Messi",
        number: 10,
        overall: 95,
        selected: false
      },
      {
        name: "Modric",
        number: 8,
        overall: 92,
        selected: false
      },
      {
        name: "Neymar",
        number: 11,
        overall: 93,
        selected: false
      },
      {
        name: "Aguero",
        number: 19,
        overall: 90,
        selected: false
      },
      {
        name: "Ronaldo",
        number: 7,
        overall: 95,
        selected: false
      }
    ],
    benchPlayers: [
      { name: "Casillas", number: 24, overall: 84, selected: false },
      { name: "Bonucci", number: 19, overall: 87, selected: false },
      { name: "Pique", number: 31, overall: 88, selected: false },
      { name: "Silva", number: 2, overall: 89, selected: false },
      { name: "Hazard", number: 14, overall: 91, selected: false },
      { name: "Pogba", number: 6, overall: 89, selected: false },
      { name: "Lewandowski", number: 33, overall: 91, selected: false }
    ],
    selectedPlayers: []
  };

  handleSelectPlayer = (activePlayer, index) => {
    const players = [...this.state.players];
    const benchPlayers = [...this.state.benchPlayers];
    let selectedPlayers = [...this.state.selectedPlayers];

    let isSelected = activePlayer.selected;

    if (players.includes(activePlayer)) {
      players[index].selected = !isSelected;
    } else benchPlayers[index].selected = !isSelected;

    if (!activePlayer.selected) {
      selectedPlayers = selectedPlayers.filter(
        player => player.selected !== false
      );
    }

    if (selectedPlayers.length >= 2) {
      const removedPlayer = selectedPlayers.shift();
      // removedPlayer.selected = false;
    }

    if (activePlayer.selected) {
      selectedPlayers.unshift(activePlayer);
    }

    this.setState({ players, benchPlayers, selectedPlayers });
  };

  pitchUpdate = () => {
    let players = [...this.state.players];
    const benchPlayers = [...this.state.benchPlayers];

    const playerSelected = players.findIndex(player => player.selected);
    const benchSelected = benchPlayers.findIndex(
      benchPlayer => benchPlayer.selected
    );

    if (playerSelected !== -1 && benchSelected !== -1) {
      const tempPlayer = players[playerSelected];
      players[playerSelected] = benchPlayers[benchSelected];
      benchPlayers[benchSelected] = tempPlayer;
    } else if (playerSelected !== -1 && benchSelected === -1) {
      const selectedPlayers = [...this.state.selectedPlayers];

      players = players.map(player => {
        if (player.selected) {
          const filterPlayer = selectedPlayers.filter(
            selectedPlayer => selectedPlayer.name !== player.name
          );
          player = filterPlayer[0];
        }
        return player;
      });
    }

    players.forEach(player => {
      player.selected = false;
    });
    benchPlayers.forEach(benchPlayer => {
      benchPlayer.selected = false;
    });

    this.setState({ players, benchPlayers, selectedPlayers: [] });
  };

  componentDidUpdate() {
    if (this.state.selectedPlayers.length >= 2) {
      this.pitchUpdate();
    } else return;
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Bench
            benchPlayers={this.state.benchPlayers}
            handleSelectPlayer={this.handleSelectPlayer}
            selectedPlayers={this.state.selectedPlayers}
          />
          <Pitch
            players={this.state.players}
            handleSelectPlayer={this.handleSelectPlayer}
            selectedPlayers={this.state.selectedPlayers}
          />
        </div>
      </div>
    );
  }
}

export default App;
