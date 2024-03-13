import React, { Component } from "react";
import "./modal.css";
export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      date: "",
    };

    this.handleImputValue = this.handleImputValue.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleImputValue(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmitForm(e) {
    e.preventDefault();
    this.props.editTodo(this.props.todoId, this.state);
    this.props.openModal()
  }

  render() {
    return (
      <div className="editTodo">
        <form
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          onSubmit={this.handleSubmitForm}
        >
          <input
            type="text"
            placeholder="todo Name"
            name="task"
            onChange={this.handleImputValue}
            required
          />
          <input
            type="date"
            name="date"
            onChange={this.handleImputValue}
            required
          />
          <button className="btn-primary">Edit Todo</button>
          <button
            className="btn-primary"
            onClick={() => this.props.openModal()}
          >
            Edit Close
          </button>
        </form>
      </div>
    );
  }
}
