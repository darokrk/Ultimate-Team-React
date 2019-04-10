import React, { Component } from "react";
import Manager from "../Manager/Manager";
import managers from "../../data/managers.json";
import "./TeamPicker.scss";

class TeamPicker extends Component {
  state = {
    index: 0,
    choosedManager: false,
    teamName: ""
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

  handleSubmit = e => {
    const { teamName } = this.state;
    e.preventDefault();
    if (teamName.length <= 2) {
      alert("Team name must have more than 2 letters");
    }
    // this.props.history.push(`/team/${this.state.teamName}`);
    this.props.history.push({
      pathname: `/team/${this.state.teamName}`,
      choosedManager: this.state.choosedManager
    });
  };

  handleTeamName = e => {
    const teamName = e.target.value;
    this.setState({ teamName });
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
    let teamPicker;
    let managerPicker;
    const managersList = managers.map(manager => (
      <Manager
        handleManagerSelect={() => this.handleManagerSelect(manager.name)}
        key={manager.name}
        manager={manager}
      />
    ));
    if (this.state.choosedManager) {
      teamPicker = (
        <div className="picker__wrapper">
          <div className="picker__header">
            <h1>Welcome to the Ultimate Team App</h1>
            <form className="picker__form" onSubmit={this.handleSubmit}>
              <label>Please insert your team name:</label>
              <input
                type="text"
                value={this.state.teamName}
                onChange={this.handleTeamName}
              />
              <button className="button">Submit</button>
            </form>
          </div>
          {/* <form className="picker__form">
            <label>Please insert your team name:</label>
            <input type="text" />
            <button className="button" onClick={this.handleClickNext}>
              Submit
            </button>
          </form> */}
        </div>
      );
    } else
      managerPicker = (
        <div className="picker__wrapper">
          <div className="picker__header">
            <h1>Welcome to the Ultimate Team App</h1>
            <span>Please insert your team name:</span>
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
    return (
      <>
        {managerPicker}
        {teamPicker}
      </>
    );
  }
}

export default TeamPicker;
