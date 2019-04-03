import React from "react";
import "./Manager.scss";

const Manager = props => {
  return (
    <div className="manager" onClick={props.handleManagerSelect}>
      <img className="manager__img" src={props.manager.img} alt="" />
      <div className="manager__info">
        <img className="manager__flag" src={props.manager.nationality} alt="" />
        <strong className="manager__name">{props.manager.name}</strong>
        <span>{props.manager.birthDate}</span>
      </div>
      <div className="manager__desc">{props.manager.desc}</div>
      <div />
    </div>
  );
};

export default Manager;
