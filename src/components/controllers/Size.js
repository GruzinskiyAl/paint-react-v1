import React, { Component } from "react";

class Size extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    }
  }

  changeHandler = e => {
    let value = e.target.value;
    this.setState({value},
      () => this.props.setPaintSettings("size", this.state.value));
  }

  render() {
      return(
        <div>
          <input 
            type = {"range"}
            value = {this.state.value}
            onChange = { e => this.changeHandler(e) }
          />
        </div>
      )
  }
}

export default Size;