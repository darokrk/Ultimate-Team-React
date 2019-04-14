import React, { Component } from "react";
import ManagerPicker from "../ManagerPicker/ManagerPicker";
import "./TeamPicker.scss";

class TeamPicker extends Component {
  state = {
    index: 0,
    choosedManager: false,
    teamName: ""
  };

  handleClickNext = () => {
    const { index } = this.state;
    this.setState({
      index: index + 1
    });
  };

  handleClickPrevious = () => {
    const { index } = this.state;
    this.setState({
      index: index - 1
    });
  };

  handleManagerSelect = managerName => {
    this.setState({
      choosedManager: managerName
    });
  };

  handleSubmit = e => {
    const { teamName, choosedManager, index } = this.state;
    e.preventDefault();
    if (teamName.length <= 2) {
      alert("Team name must have more than 2 letters");
      return;
    }
    this.props.history.push({
      pathname: `/team/${teamName}`,
      choosedManager: choosedManager,
      indexManager: index
    });
  };

  handleTeamName = e => {
    const teamName = e.target.value;
    this.setState({ teamName });
  };

  componentDidUpdate() {
    const { index } = this.state;
    if (index > 5) {
      this.setState({
        index: 0
      });
    } else if (index < 0) {
      this.setState({
        index: 5
      });
    } else return;
  }

  render() {
    const { teamName, choosedManager, index } = this.state;
    let teamPicker;
    if (choosedManager) {
      teamPicker = (
        <div className="picker__wrapper">
          <div className="picker__header">
            <h1>Welcome to the Ultimate Team App</h1>
            <form className="picker__form" onSubmit={this.handleSubmit}>
              <label>Please insert your team name:</label>
              <input
                className="form__input"
                type="text"
                value={teamName}
                onChange={this.handleTeamName}
                required
              />
              <button className="button">Submit</button>
            </form>
          </div>
        </div>
      );
    } else
      teamPicker = (
        <ManagerPicker
          indexManager={index}
          handleManagerSelect={this.handleManagerSelect}
          handleClickPrevious={this.handleClickPrevious}
          handleClickNext={this.handleClickNext}
        />
      );
    return <>{teamPicker}</>;
  }
}

export default TeamPicker;
