import React from "react";
import "./Overall.scss";

const Overall = props => (
  <div className="overall__wrapper">
    <div className="overall__slogan">Team Name</div>
    <div className="overall__circle">Rating: {props.overallPower}</div>
  </div>
);

export default Overall;
