import React from "react";
import "./Overall.scss";

const Overall = props => (
  <div className="overall__wrapper">
    <div className="overall__name">Team Name</div>
    <div className="overall__power">Rating: {props.overallPower}</div>
    <div className="overall__display">
      <div className="display__content" />
    </div>
  </div>
);

export default Overall;
