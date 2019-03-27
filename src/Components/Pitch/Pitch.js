import React from "react";
import Player from "../Player/Player";
import Overall from "../Overall/Overall";
import "./Pitch.scss";

const Pitch = props => {
  const { players } = props;

  let overallPower = players.reduce(
    (total, player) => total + player.overall,
    0
  );
  overallPower = parseFloat(overallPower / 11).toFixed(2);

  const playersOnTheField = players.map((player, i) => {
    return (
      <Player
        key={player.name}
        // id={player.name}
        player={player}
        index={i}
        selected={player.selected}
        handleSelectPlayer={props.handleSelectPlayer}
      />
    );
  });
  return (
    <>
      <div className="pitch">
        <div className="field__wrapper field__wrapper-1-4-1-3-2">
          {playersOnTheField}
        </div>
      </div>
      <Overall text={overallPower} />
    </>
  );
};

export default Pitch;
