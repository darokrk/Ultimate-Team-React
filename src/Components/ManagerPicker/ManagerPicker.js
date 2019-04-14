import React from "react";
import Manager from "../Manager/Manager";
import managers from "../../data/managers.json";

const ManagerPicker = props => {
  const {
    handleManagerSelect,
    indexManager,
    handleClickPrevious,
    handleClickNext
  } = props;
  const managersList = managers.map(manager => (
    <Manager
      handleManagerSelect={() => handleManagerSelect(manager.name)}
      key={manager.name}
      manager={manager}
    />
  ));
  return (
    <div className="picker__wrapper">
      <div className="picker__header">
        <h1>Welcome to the Ultimate Team App</h1>
        <span>Please select your team manager:</span>
      </div>
      <div className="managers__wrapper">{managersList[indexManager]}</div>
      <div className="managers__buttons">
        <button className="button" onClick={handleClickPrevious}>
          Previous
        </button>
        <button className="button" onClick={handleClickNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ManagerPicker;
