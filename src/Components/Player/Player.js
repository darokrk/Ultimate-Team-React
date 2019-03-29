import React from "react";
import "./Player.scss";

const Player = props => {
  return (
    <div className={`player__wrapper-${props.index}`}>
      <div
        className={props.selected ? "player picked" : "player"}
        onClick={() => props.handleSelectPlayer(props.player, props.index)}
      >
        <div className="player__info">
          <span>{props.player.number}</span>
          <span>
            <strong>{props.player.position}</strong>
          </span>
          <img className="info__club" src={props.player.club} alt="" />
          <img
            className="info__nationality"
            src={props.player.nationality}
            alt=""
          />
        </div>
        <img className="player__img" src={props.player.img} alt="" />
      </div>
    </div>
  );
};

export default Player;
