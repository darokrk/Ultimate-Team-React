import React, { Component } from "react";
import Manager from "../Manager/Manager";
import managers from "../../data/managers.json";
import "./TeamPicker.scss";

class TeamPicker extends Component {
  state = {
    index: 0
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
      <Manager key={manager.name} manager={manager} />
    ));
    return (
      <div>
        <div>
          <h1>Welcome to ultimate team app</h1>
          <span>Please choose your manager</span>
        </div>
        <div className="managers__wrapper">
          {managersList[this.state.index]}
        </div>
        <div>
          <button onClick={this.handleClickPrevious}>Previous</button>
          <button onClick={this.handleClickNext}>Next</button>
        </div>
      </div>
    );
  }
}

export default TeamPicker;
