import React from "react";
import Player from "../Player/Player";
import "./Bench.scss";

const Bench = props => {
  const { benchPlayers, handleSelectPlayer } = props;

  const playersOnBench = benchPlayers.map((player, i) => {
    return (
      <Player
        key={player.name}
        player={player}
        index={i}
        handleSelectPlayer={handleSelectPlayer}
        selected={player.selected}
      />
    );
  });
  return <div className="bench">{playersOnBench}</div>;
};

export default Bench;
