import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => { 
    let x = event.clientX
    let y = event.clientY
    drawChromeBoiAtCoords(x, y)
  }

  handleMouseClick = (event) => {
    toggleCycling()
  }
  
  handleKeyPress = (event) => {
    let arg 
    (event.key === "a") ? (arg = '+') : (arg = '-')
    resize(arg)
  }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={this.handleMouseClick}
        onKeyPress={this.handleKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
