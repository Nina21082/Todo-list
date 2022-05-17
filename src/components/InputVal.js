

import React, { Component } from "react";
import { CompButton } from "./CompButton";

export class InputVal extends Component {
  state = {
    value: "",
  };

  handleChange = (ev) => {
    this.setState({ value: ev.target.value });
  };

  handleAdd = () =>  {
    this.setState({ value: "" });
    this.props.handleAddParent(this.state.value);
  }

  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <CompButton onClick={this.handleAdd} />
      </>
    );
  }
}