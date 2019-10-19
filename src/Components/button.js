import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import {IncrementButton} from "./Selector"

export  default  class ShowButton extends Component {
  Constructor(props){  
    super(props){}
  {clicks,disabled}  IncrementButton}

    render() {
    return (
      <div>
        <Button content="Next Name " onClick={this.handleClickUp} />
        <Button
          disabled={this.state.disabled}
          content="Previous Name"
          onClick={this.handleClickDown}
        />
        <div>{this.state.clicks}</div>
      </div>
    );
  }
}
