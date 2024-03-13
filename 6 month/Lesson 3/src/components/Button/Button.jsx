import React, { Component } from "react";

export default class Button extends Component {

  render() {
    return (
      <button onClick={() => this.props.deleteTodo(this.props.todoId)}>
        {this.props.more}
      </button>
    );
  }
}
