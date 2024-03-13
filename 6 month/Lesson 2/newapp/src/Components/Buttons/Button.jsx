import React, { Component } from "react";

export default class Button extends Component {
  
  newName() {
    const newName = prompt("Enter your new name");

    if (newName) {
      this.props.changeCardName(newName)
    }
  }
 
  render() {
    
    return <button onClick={() => this.newName()}>Click</button>;
  }
}
