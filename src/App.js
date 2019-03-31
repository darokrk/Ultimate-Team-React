import React, { Component } from "react";
import Pitch from "./Components/Pitch/Pitch";
import Bench from "./Components/Bench/Bench";
import "./App.scss";
import Header from "./Components/Header/Header";

class App extends Component {
  state = {
    players: [
      {
        name: "Ronaldo",
        number: 7,
        overall: 95,
        selected: false,
        position: "ST",
        img:
          "https://futhead.cursecdn.com/static/img/18/players_worldcup/20801.png",
        club: "https://futhead.cursecdn.com/static/img/19/clubs/45.png",
        nationality: "https://futhead.cursecdn.com/static/img/19/nations/38.png"
      },
      {
        name: "Aguero",
        number: 19,
        overall: 90,
        selected: false,
        position: "ST",
        img: "https://futhead.cursecdn.com/static/img/19/players/153079.png",
        club: "https://futhead.cursecdn.com/static/img/19/clubs/10.png",
        nationality: "https://futhead.cursecdn.com/static/img/19/nations/52.png"
      },
      {
        name: "Neymar",
        number: 11,
        overall: 93,
        selected: false,
        position: "LM",
        img: "https://futhead.cursecdn.com/static/img/17/players/190871.png",
        club: "https://futhead.cursecdn.com/static/img/19/clubs/73.png",
        nationality: "https://futhead.cursecdn.com/static/img/19/nations/54.png"
      },
      {
        name: "Modric",
        number: 8,
        overall: 92,
        selected: false,
        position: "CM",
        img: "https://futhead.cursecdn.com/static/img/19/players/177003.png",
        club: "https://futhead.cursecdn.com/static/img/19/clubs/243.png",
        nationality: "https://futhead.cursecdn.com/static/img/19/nations/10.png"
      },
      {
        name: "Messi",
        number: 10,
        overall: 95,
        selected: false,
        position: "RM",
        img:
          "https://futhead.cursecdn.com/static/img/18/players_worldcup/158023.png",
        club: "https://futhead.cursecdn.com/static/img/19/clubs/241.png",
        nationality: "https://futhead.cursecdn.com/static/img/19/nations/52.png"
      },
      {
        name: "Kante",
        number: 17,
        overall: 91,
        selected: false,
        position: "CDM",
        img: "https://futhead.cursecdn.com/static/img/19/players/215914.png",
        club: "https://futhead.cursecdn.com/static/img/19/clubs/5.png",
        nationality: "https://futhead.cursecdn.com/static/img/19/nations/18.png"
      },
      {
        name: "Marcelo",
        number: 12,
        overall: 89,
        selected: false,
        position: "LB",
        img: "https://futhead.cursecdn.com/static/img/19/players/176676.png",
        club: "https://futhead.cursecdn.com/static/img/19/clubs/243.png",
        nationality: "https://futhead.cursecdn.com/static/img/19/nations/54.png"
      },
      {
        name: "Ramos",
        number: 4,
        overall: 92,
        selected: false,
        position: "CB",
        img: "https://futhead.cursecdn.com/static/img/19/players/155862.png",
        club: "https://futhead.cursecdn.com/static/img/19/clubs/243.png",
        nationality: "https://futhead.cursecdn.com/static/img/19/nations/45.png"
      },
      {
        name: "Chiellini",
        number: 3,
        overall: 91,
        selected: false,
        position: "CB",
        img: "https://futhead.cursecdn.com/static/img/19/players/138956.png",
        club: "https://futhead.cursecdn.com/static/img/19/clubs/45.png",
        nationality: "https://futhead.cursecdn.com/static/img/19/nations/27.png"
      },
      {
        name: "Carvajal",
        number: 21,
        overall: 88,
        selected: false,
        position: "RB",
        img: "https://futhead.cursecdn.com/static/img/19/players/204963.png",
        club: "https://futhead.cursecdn.com/static/img/19/clubs/243.png",
        nationality: "https://futhead.cursecdn.com/static/img/19/nations/45.png"
      },
      {
        name: "Buffon",
        number: 1,
        overall: 88,
        selected: false,
        position: "GK",
        img: "https://futhead.cursecdn.com/static/img/19/players/1179.png",
        club: "https://futhead.cursecdn.com/static/img/19/clubs/73.png",
        nationality: "https://futhead.cursecdn.com/static/img/19/nations/27.png"
      }
    ],
    benchPlayers: [
      {
        name: "Casillas",
        number: 24,
        overall: 84,
        selected: false,
        position: "GK",
        img: "https://futhead.cursecdn.com/static/img/19/players/5479.png",
        club: "https://futhead.cursecdn.com/static/img/19/clubs/236.png",
        nationality: "https://futhead.cursecdn.com/static/img/19/nations/45.png"
      },
      {
        name: "Bonucci",
        number: 19,
        overall: 87,
        selected: false,
        position: "CB",
        img: "https://futhead.cursecdn.com/static/img/19/players/184344.png",
        club: "https://futhead.cursecdn.com/static/img/19/clubs/45.png",
        nationality: "https://futhead.cursecdn.com/static/img/19/nations/27.png"
      },
      {
        name: "Pique",
        number: 31,
        overall: 88,
        selected: false,
        position: "CB",
        img: "https://futhead.cursecdn.com/static/img/19/players/152729.png",
        club: "https://futhead.cursecdn.com/static/img/19/clubs/241.png",
        nationality: "https://futhead.cursecdn.com/static/img/19/nations/45.png"
      },
      {
        name: "Silva",
        number: 2,
        overall: 89,
        selected: false,
        img: "https://futhead.cursecdn.com/static/img/19/players/218667.png",
        club: "https://futhead.cursecdn.com/static/img/19/clubs/10.png",
        nationality: "https://futhead.cursecdn.com/static/img/19/nations/38.png"
      },
      {
        name: "Hazard",
        number: 14,
        overall: 91,
        selected: false,
        img: "https://futhead.cursecdn.com/static/img/19/players/183277.png",
        club: "https://futhead.cursecdn.com/static/img/19/clubs/5.png",
        nationality: "https://futhead.cursecdn.com/static/img/19/nations/7.png"
      },
      {
        name: "Pogba",
        number: 6,
        overall: 89,
        selected: false,
        img: "https://futhead.cursecdn.com/static/img/19/players/195864.png",
        club: "https://futhead.cursecdn.com/static/img/19/clubs/11.png",
        nationality: "https://futhead.cursecdn.com/static/img/19/nations/18.png"
      },
      {
        name: "Lewandowski",
        number: 33,
        overall: 91,
        selected: false,
        img: "https://futhead.cursecdn.com/static/img/19/players/188545.png",
        club: "https://futhead.cursecdn.com/static/img/19/clubs/21.png",
        nationality: "https://futhead.cursecdn.com/static/img/19/nations/37.png"
      }
    ],
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

  componentDidUpdate() {
    if (this.state.selectedPlayers.length >= 2) {
      this.pitchUpdate();
    } else return;
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="container">
          <Pitch
            players={this.state.players}
            handleSelectPlayer={this.handleSelectPlayer}
            selectedPlayers={this.state.selectedPlayers}
            handleFormationChange={this.handleFormationChange}
            formation={this.state.formation}
          />
          <Bench
            benchPlayers={this.state.benchPlayers}
            handleSelectPlayer={this.handleSelectPlayer}
            selectedPlayers={this.state.selectedPlayers}
          />
        </div>
      </div>
    );
  }
}

export default App;
