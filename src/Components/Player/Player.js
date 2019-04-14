import React from "react";
import "./Player.scss";
import "../../data/formations.scss";

const Player = props => {
  const { selected, index, player, handleSelectPlayer } = props;

  let playerClass = "player";
  let playerClub = null;
  if (selected) {
    playerClass = "player picked";
  }
  if (player.club) {
    playerClub = <img className="info__club" src={player.club} alt="" />;
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
          {playerClub}
          <img className="info__nationality" src={player.nationality} alt="" />
        </div>
        <img className="player__img" src={player.img} alt="" />
      </div>
    </div>
  );
};

export default Player;
