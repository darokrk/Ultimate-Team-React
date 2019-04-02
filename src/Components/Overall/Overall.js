import React from "react";
import Player from "../Player/Player";
import managers from "../../data/managers.json";
import "./Overall.scss";

const Overall = props => {
  const { overallPower, handleFormationChange, formation } = props;

  return (
    <div className="overall__wrapper">
      <div className="overall__name">Team Name</div>
      <div className="overall__power">
        <span>Rating</span>
        <span>{overallPower}</span>
      </div>
      <div className="overall__display">
        <div
          className="display__content"
          style={{ width: `${overallPower}%` }}
        />
      </div>
      <select
        className="overall__formation"
        onChange={handleFormationChange}
        value={formation}
      >
        <option value="1-4-1-3-2">1-4-1-3-2</option>
        <option value="1-4-4-2">1-4-4-2</option>
        <option value="1-4-1-2-1-2">1-4-1-2-1-2</option>
        <option value="1-4-2-3-1">1-4-2-3-1</option>
        <option value="1-4-2-2-2">1-4-2-2-2</option>
        <option value="1-3-3-2-2">1-3-3-2-2</option>
      </select>
      <div>
        <span>Manager</span>
        {/* <Player player={managers[3]} /> */}
      </div>
    </div>
  );
};

export default Overall;
