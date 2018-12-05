import React, { Component } from "react";

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.paintSettings;
    this.painting = true;
  }

  getMousePosition = (canvas, e) => {
    let rect = canvas.getBoundingClientRect();
    return {
      x: (e.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
      y: (e.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
    };
}

  mouseMoveHandler = e => {
    // if (this.painting && this.state.brush) {
      let ctx = e.target.getContext('2d');
      ctx.fillStyle = this.state.color;
      ctx.beginPath();
      ctx.arc(
        this.getMousePosition(e.target, e).x,
        this.getMousePosition(e.target, e).y,
        this.state.size,
        50,
        Math.PI * 2, 
        true);
      ctx.fill();
    // }
  }

  mouseDownHandler = e => {
    this.painting = true;
  }

  mouseUpHandler = e => {
    this.painting = false;
  }

  mouseLeaveHandler = e => {
    this.painting = false;
  }

  mouseCLickHandler = e => {
    let ctx = e.target.getContext('2d');
    ctx.fillStyle = this.state.color;
    ctx.beginPath();
    ctx.arc(
      this.getMousePosition(e.target, e).x,
      this.getMousePosition(e.target, e).y,
      this.state.size,
      50,
      Math.PI * 2, 
      true);
    ctx.fill();
  }

  render() {
      return(
        <div>
          <canvas
            onMouseMove = {this.mouseMoveHandler}
            onClick = {this.mouseCLickHandler}
            style = {{height:"500px", width:"500px", border: "1px solid black"}}
          >

          </canvas>
        </div>
      )
  }
}

export default Canvas;