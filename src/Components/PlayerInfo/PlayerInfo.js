import React from "react";
import Player from "../Player/Player";
import PropTypes from "prop-types";
import "./PlayerInfo.scss";

const PlayerInfo = props => {
  const { selectedPlayers } = props;

  let playerInfo = null;

  if (selectedPlayers[0]) {
    let stats = selectedPlayers[0].stats;
    stats = Object.keys(stats).map((attr, i) => (
      <div className="stats__wrapper" key={i}>
        <div className="stats__attr">{attr}</div>
        <div className="stats__value">{stats[attr]}</div>
      </div>
    ));
    playerInfo = (
      <div className="playercard__info">
        <div className="playercard__picture">
          <Player player={selectedPlayers[0]} />
          <span className="playercard__name">{selectedPlayers[0].name}</span>
        </div>
        <div className="playercard__stats">{stats}</div>
      </div>
    );
  }

  return <>{playerInfo}</>;
};

PlayerInfo.propTypes = {
  selectedPlayers: PropTypes.array
};

export default PlayerInfo;
