import React from "react";
import "./Overall.scss";

const Overall = props => (
  <div className="overall__wrapper">
    <h3 className="overall__slogan">Your team overall power:</h3>
    <div className="overall__circle">{props.text}</div>
  </div>
);

export default Overall;
