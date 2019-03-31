import React from "react";
import Player from "../Player/Player";
import "./PlayerInfo.scss";

const PlayerInfo = props => {
  const { selectedPlayers } = props;

  let playerInfo = null;

  if (selectedPlayers[0]) {
    playerInfo = (
      <div className="player__more">
        <div className="more__look">
          <Player player={selectedPlayers[0]} />
        </div>
      </div>
    );
  }

  return <>{playerInfo}</>;
};

export default PlayerInfo;
