import React, { Component } from "react";
import './TodoForm.css'
export default class TodoForm extends Component {
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
    this.props.addTodo(this.state);
    console.log(this.state);
  }

  render() {
    return (
      <form className="todoForm" onSubmit={this.handleSubmitForm}>
        <input
          type="text"
          placeholder="todo Name"
          onChange={this.handleImputValue}
          name="task"
          required
        />
        <input
          type="date"
          onChange={this.handleImputValue}
          name="date"
          required
        />
        <button className="btn-primary">Add Todo</button>
      </form>
    );
  }
}
