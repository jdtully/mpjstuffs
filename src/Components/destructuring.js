import React, { Component } from "react";

import { array } from "./testarray";

//import { findme } from "./vars";

export class OneRow extends Component {
  render() {
    return array
      .filter(res => {
        return res.number === 2;
      })
      .map(row => {
        return <h1>{JSON.stringify(row, null, 2)}</h1>;
      });
  }
}
