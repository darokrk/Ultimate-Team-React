import React from "react";
import "./Overall.scss";

const Overall = props => (
  <div className="overall__wrapper">
    <div className="overall__name">Team Name</div>
    <div className="overall__power">
      <span>Rating</span>
      <span>{props.overallPower}</span>
    </div>
    <div className="overall__display">
      <div
        className="display__content"
        style={{ width: `${props.overallPower}%` }}
      />
    </div>
    <select
      className="overall__formation"
      onChange={props.handleFormationChange}
      value={props.formation}
    >
      <option value="1-4-1-3-2">1-4-1-3-2</option>
      <option value="1-4-4-2">1-4-4-2</option>
      <option value="1-4-1-2-1-2">1-4-1-2-1-2</option>
      <option value="1-4-2-3-1">1-4-2-3-1</option>
      <option value="1-4-2-2-2">1-4-2-2-2</option>
      <option value="1-4-3-2-2">1-4-3-2-2</option>
    </select>
    <div>Manager</div>
  </div>
);

export default Overall;
