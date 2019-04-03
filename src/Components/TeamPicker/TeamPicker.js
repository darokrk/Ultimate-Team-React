import React, { Component } from "react";
import Manager from "../Manager/Manager";
import managers from "../../data/managers.json";
import "./TeamPicker.scss";

class TeamPicker extends Component {
  state = {
    index: 0,
    choosedManager: false
  };

  handleClickNext = () => {
    this.setState({
      index: this.state.index + 1
    });
  };

  handleClickPrevious = () => {
    this.setState({
      index: this.state.index - 1
    });
  };

  handleManagerSelect = managerName => {
    this.setState({
      choosedManager: managerName
    });
  };

  componentDidUpdate() {
    if (this.state.index > 5) {
      this.setState({
        index: 0
      });
    } else if (this.state.index < 0) {
      this.setState({
        index: 5
      });
    } else return;
  }

  render() {
    const managersList = managers.map(manager => (
      <Manager
        handleManagerSelect={() => this.handleManagerSelect(manager.name)}
        key={manager.name}
        manager={manager}
      />
    ));
    return (
      <div className="picker__wrapper">
        <div className="picker__header">
          <h1>Welcome to the Ultimate Team App</h1>
          <span>Please choose your manager:</span>
        </div>
        <div className="managers__wrapper">
          {managersList[this.state.index]}
        </div>
        <div className="managers__buttons">
          <button className="button" onClick={this.handleClickPrevious}>
            Previous
          </button>
          <button className="button" onClick={this.handleClickNext}>
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default TeamPicker;
