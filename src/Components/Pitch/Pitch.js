import React from "react";
import Player from "../Player/Player";
import "./Pitch.scss";

const Pitch = props => {
  const playersOnTheField = props.players.map((player, i) => (
    <Player key={player.name} player={player} index={i} />
  ));
  return (
    <div className="pitch">
      <div className="field__wrapper field__wrapper-1-4-1-3-2">
        {playersOnTheField}
      </div>
    </div>
  );
};

export default Pitch;
