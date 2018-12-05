import React, { Component } from 'react';
import '../App.css';

import Header from "./Header"
import PaintPanel from './PaintPanel';

class App extends Component {
  constructor(props) {
    super(props);
    let initPaintSettings = JSON.parse(localStorage.getItem("paintSettings"));

    if (initPaintSettings) {
      this.state = {paintSettings: initPaintSettings};
    } else {
      this.state = {
        paintSettings: {
          color: "black",
          size: 25,
          figure: "Circle",
          brush: true
        }
      }
    }
  }

  setPaintSettings = (key, value) => {
    let data = this.state.paintSettings;
    data[key] = value;
    this.setState({
      paintSettings: data
    })

    localStorage.setItem("paintSettings", JSON.stringify(data));
  }

  render() {
    return (
      <div className="App">
        <Header 
          paintSettings = {this.state.paintSettings}
          setPaintSettings = {this.setPaintSettings}
        />
        <PaintPanel 
          paintSettings = {this.state.paintSettings}
        />
      </div>
    );
  }
}

export default App;
