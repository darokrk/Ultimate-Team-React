import React from "react";
import Player from "../Player/Player";
import "./Pitch.scss";

const Pitch = props => {
  const { players } = props;

  let overallPower = players.reduce(
    (total, player) => total + player.overall,
    0
  );
  overallPower = parseFloat(overallPower / 11).toFixed(2);

  const playersOnTheField = players.map((player, i) => {
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
  return (
    <>
      <div className="pitch">
        <div className="field__wrapper field__wrapper-1-4-1-3-2">
          {playersOnTheField}
        </div>
      </div>
      <h3>
        Your team overall power:
        {overallPower}
      </h3>
    </>
  );
};

export default Pitch;
