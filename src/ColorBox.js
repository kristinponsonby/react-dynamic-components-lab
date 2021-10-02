import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
      const opacity = this.props.value;
      return this.props.value < .2 ? null : (
        <div className="color-box" style={opacity -.1}></div>
    )
  }

}

