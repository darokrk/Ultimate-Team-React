import React from "react";
import "./Player.scss";

const Player = props => {
  return (
    <div className={`player__wrapper-${props.index}`}>
      <div className="player" />
      {props.player.name}
    </div>
  );
};

export default Player;
