import React from "react";
import "./Player.scss";
import "../../data/formations.scss";

const Player = props => {
  const { selected, index, player, handleSelectPlayer } = props;

  let playerClass = "player";
  if (selected) {
    playerClass = "player picked";
  }
  return (
    <div className={`player__wrapper-${index}`}>
      <div
        className={playerClass}
        onClick={() => handleSelectPlayer(player, index)}
      >
        <div className="player__info">
          <span>{player.number}</span>
          <span>
            <strong>{player.position}</strong>
          </span>
          <img className="info__club" src={player.club} alt="" />
          <img className="info__nationality" src={player.nationality} alt="" />
        </div>
        <img className="player__img" src={player.img} alt="" />
      </div>
    </div>
  );
};

export default Player;
