import React, { Component } from "react";

class Figure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    }
  }

  chageHandler = e => {
    let value = e.target.value;
    this.setState({value},
      () => this.props.setPaintSettings("figure", this.state.value))
  }

  render() {
      return(
        <div>
          <select
            value = {this.state.value}
            onChange = { e => this.chageHandler(e) }
          >
            <option>Circle</option>
            <option>Square</option>
            <option>Hexagon</option>
          </select>
        </div>
      )
  }
}

export default Figure;