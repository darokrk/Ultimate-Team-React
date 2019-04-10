import React from "react";
import Player from "../Player/Player";
import Overall from "../Overall/Overall";
import "./Pitch.scss";

const Pitch = props => {
  const {
    players,
    handleSelectPlayer,
    formation,
    handleFormationChange,
    teamName
  } = props;

  let overallPower = players.reduce(
    (total, player) => total + player.overall,
    0
  );
  overallPower = parseFloat(overallPower / 11).toFixed(2);

  const playersOnTheField = players.map((player, i) => {
    return (
      <Player
        key={player.name}
        player={player}
        index={i}
        selected={player.selected}
        handleSelectPlayer={handleSelectPlayer}
      />
    );
  });
  return (
    <>
      <div className="pitch">
        <div className={`field__wrapper field__wrapper-${formation}`}>
          {playersOnTheField}
        </div>
      </div>
      <Overall
        handleFormationChange={handleFormationChange}
        formation={formation}
        overallPower={overallPower}
        teamName={teamName}
      />
    </>
  );
};

export default Pitch;
