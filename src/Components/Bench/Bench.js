import React from "react";
import Player from "../Player/Player";
import "./Bench.scss";

const Bench = props => {
  const playersOnBench = props.benchPlayers.map((player, i) => (
    <Player key={player.name} player={player} index={i} />
  ));
  return <div className="bench">{playersOnBench}</div>;
};

export default Bench;
