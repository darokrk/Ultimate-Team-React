import React from "react";
import Player from "../Player/Player";
import "./PlayerInfo.scss";

const PlayerInfo = props => {
  const { selectedPlayers } = props;

  let playerInfo = null;

  if (selectedPlayers[0]) {
    let stats = selectedPlayers[0].stats;
    stats = Object.keys(stats).map(element => (
      <p>{`${element}: ${stats[element]}`}</p>
    ));
    console.log(stats);
    playerInfo = (
      <div className="player__more">
        <div className="more__look">
          <Player player={selectedPlayers[0]} />
        </div>
        <div className="more__stats">{stats}</div>
      </div>
    );
  }

  return <>{playerInfo}</>;
};

export default PlayerInfo;
