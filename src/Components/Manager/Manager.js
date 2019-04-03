import React from "react";
import "./Manager.scss";

const Manager = props => {
  const { img, nationality, name, birthDate, desc } = props.manager;
  return (
    <div className="manager" onClick={props.handleManagerSelect}>
      <img className="manager__img" src={img} alt="" />
      <div className="manager__info">
        <img className="manager__flag" src={nationality} alt="" />
        <strong className="manager__name">{name}</strong>
        <span>{birthDate}</span>
      </div>
      <div className="manager__desc">{desc}</div>
      <div />
    </div>
  );
};

export default Manager;
