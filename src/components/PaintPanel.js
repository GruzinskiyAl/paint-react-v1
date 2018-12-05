import React, { Component } from "react";

import CanvasWrapper from './painting/CanvasWrapper'

class PaintPanel extends Component {
  render() {
      return(
        <div>
            PaintPanel
            <CanvasWrapper />
        </div>
      )
  }
}

export default PaintPanel;