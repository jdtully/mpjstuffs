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
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <Button content="Click up" onClick={this.handleClickUp} />
        <Button
          disabled={!this.state.show}
          content="Click down"
          onClick={this.handleClickDown}
        />
        <div id="clicks">{this.state.clicks}</div>
      </div>
    );
  }
}
