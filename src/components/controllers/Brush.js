import React, { Component } from "react";

class Brush extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    }
  }

  changeHandler = e => {
    let value = e.target.checked;
    this.setState({value},
      () => this.props.setPaintSettings("brush", this.state.value))
  }

  render() {
      return(
        <div>
          <input 
            onChange = {e => this.changeHandler(e)}
            checked = {this.state.value}
            type = {"checkbox"}
          />
        </div>
      )
  }
}

export default Brush;