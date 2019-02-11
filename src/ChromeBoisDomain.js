import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'
import { eventNames } from 'cluster';


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {

    let x = event.clientX
    let y = event.clientY

    drawChromeBoiAtCoords(x, y);
  }

   handleMouseClick = (element) => {
     toggleCycling();
   }

  handleKeyPress = (event) => {
    let arg 

    if(event.key === 'a'){
      {arg = '+'}
      resize(arg);
    } else {
      if(event.key === 's') {
        {arg = '-'}
        resize(arg);
      }
    }
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
