import React from "react";
import Player from "../Player/Player";
import "./Bench.scss";

const Bench = props => {
  const playersOnBench = props.benchPlayers.map((player, i) => {
    const pickedPlayers = props.pickedPlayers.filter(
      pickedPlayer => pickedPlayer === player.name
    );
    return (
      <Player
        key={player.name}
        player={player}
        index={i}
        handleSelectPlayer={props.handleSelectPlayer}
        pickedPlayers={pickedPlayers.length >= 1 ? pickedPlayers : null}
      />
    );
  });
  return <div className="bench">{playersOnBench}</div>;
};

export default Bench;
