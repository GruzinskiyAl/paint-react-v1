import React, { Component } from "react";

import Canvas from "./Canvas"

class CanvasWrapper extends Component {

  render() {
      return(
        <div>
          CanvasWrapper
          <Canvas 
            paintSettings = {this.props.paintSettings}
          />
        </div>
      )
  }
}

export default CanvasWrapper;