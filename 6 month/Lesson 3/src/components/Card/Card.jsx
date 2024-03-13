import React, { Component } from "react";
import "./card.css";
import Modal from "../Modal/Modal";
export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      date: "",
    };
  }
  render() {
    const { task, id, date, completed } = this.props.item;
    return (
      <>
        <label
          style={{
            background: completed ? "green" : "rgba(128, 128, 128, 0.402)",
          }}
          className="card"
          htmlFor={id}
        >
          <input
            type="checkbox"
            id={id}
            defaultChecked={completed}
            onChange={() => this.props.completedTodo(id)}
          />
          <h2>{task}</h2>
          <span>{date}</span>
          <button onClick={() => this.props.deleteTodo(id)}>Delete</button>
          <button onClick={() => this.props.openModal()}>Edit</button>
        </label>

        {this.props.isOpen && (
          <Modal openModal={this.props.openModal} editTodo={this.props.editTodo} todoId={id}/>
        )}
      </>
    );
  }
}
