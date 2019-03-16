import React from "react";
import Player from "../Player/Player";
import "./Pitch.scss";

const Pitch = props => {
  const playersOnTheField = props.players.map(player => (
    <Player key={player.name} player={player} />
  ));
  return <div className="pitch">{playersOnTheField}</div>;
};

export default Pitch;
