import React, { Component } from "react";

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    }
  }

  changeHandler = e => {
    let value = e.target.value;
    this.setState({
      value
    })
  }

  clickHandler = () => {
    this.props.setPaintSettings("color", this.state.value)
  }

  render() {
      return(
        <div>
          <input
            type = {"text"}
            value = {this.state.value}
            onChange = {e => this.changeHandler(e)} 
          />
          <button
            onClick = {this.clickHandler}
          >
            {"Enter"}
          </button>
        </div>
      )
  }
}

export default Color;