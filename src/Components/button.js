import React, { Component } from "react";
import { Button } from "semantic-ui-react";

export class IncrementButton extends Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0, show: false };
  }
  handleClickUp = () => {
    this.setState({ clicks: this.state.clicks + 1 });
    this.setState({ show: true });
  };

  handleClickDown = () => {
    if (this.state.clicks > 0) this.setState({ clicks: this.state.clicks - 1 });
    this.disabledToggle();
  };
  disabledToggle = () => {
    if (this.state.clicks === 0) this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <Button id="up" content="Next Name " onClick={this.handleClickUp} />
        <Button
          id="down"
          disabled={!this.state.show}
          content="Previous Name"
          onClick={this.handleClickDown}
        />
        <div id="clicks">{this.state.clicks}</div>
      </div>
    );
  }
}
