import React, { Component } from "react";
import Pitch from "./Components/Pitch/Pitch";
import Bench from "./Components/Bench/Bench";
import Header from "./Components/Header/Header";
import PlayerInfo from "./Components/PlayerInfo/PlayerInfo";

import "./App.scss";
import players from "./data/players.json";
import benchPlayers from "./data/benchPlayers.json";

class App extends Component {
  state = {
    players: players,
    benchPlayers: benchPlayers,
    selectedPlayers: [],
    formation: "1-4-1-3-2"
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

  handleFormationChange = e => {
    this.setState({
      formation: e.target.value
    });
  };

  componentWillMount() {
    console.log(this.props.match);
  }

  componentDidUpdate() {
    if (this.state.selectedPlayers.length >= 2) {
      this.pitchUpdate();
    } else return;
  }

  render() {
    const { players, selectedPlayers, formation, benchPlayers } = this.state;

    return (
      <div className="app">
        <Header />
        <div className="container">
          <Pitch
            players={players}
            handleSelectPlayer={this.handleSelectPlayer}
            selectedPlayers={selectedPlayers}
            handleFormationChange={this.handleFormationChange}
            formation={formation}
          />
          <Bench
            benchPlayers={benchPlayers}
            handleSelectPlayer={this.handleSelectPlayer}
            selectedPlayers={selectedPlayers}
          />
          <PlayerInfo selectedPlayers={selectedPlayers} />
        </div>
      </div>
    );
  }
}

export default App;
