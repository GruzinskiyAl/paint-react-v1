import React, { Component } from "react";

import Color from './controllers/Color'
import Size from './controllers/Size'
import Figure from './controllers/Figure'
import Brush from './controllers/Brush'

class ControlPanel extends Component {
  render() {
      return(
        <div>
          <Color 
            value = {this.props.paintSettings.color}
            setPaintSettings = {this.props.setPaintSettings}
          />
          <Size 
            value = {this.props.paintSettings.size}
            setPaintSettings = {this.props.setPaintSettings}
          />
          <Figure 
            value = {this.props.paintSettings.figure}
            setPaintSettings = {this.props.setPaintSettings}
          />
          <Brush 
            value = {this.props.paintSettings.brush}
            setPaintSettings = {this.props.setPaintSettings}
          />
        </div>
      )
  }
}

export default ControlPanel;