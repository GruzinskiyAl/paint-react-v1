import React, { Component } from "react";

import ControlPanel from './ControlPanel'

class Header extends Component {
  render() {
      return(
        <div>
          <h4>Paint</h4>
          <ControlPanel 
            paintSettings = {this.props.paintSettings}
            setPaintSettings = {this.props.setPaintSettings}
          />
        </div>
      )
  }
}

export default Header;