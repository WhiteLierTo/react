import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Lee",
    };
  }

  render() {
    return <div>{this.state.name}</div>;
  }
}
