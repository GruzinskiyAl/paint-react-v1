import React, { Component } from "react";

class Canvas extends Component {
  render() {
      return(
        <div>
          <canvas
            style = {{height:"100px", width:"100px", border: "1px solid black"}}
          >

          </canvas>
        </div>
      )
  }
}

export default Canvas;