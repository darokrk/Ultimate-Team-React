import React from "react";

const Manager = props => {
  return (
    <div>
      <img src={props.manager.img} alt="" />
      <span>{props.manager.name}</span>
      <img src={props.manager.nationality} alt="" />
    </div>
  );
};

export default Manager;
