import React, { Component } from "react";
import "./todoList.css";
import Card from "../Card/Card";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  
  render() {
    const cards = this.props.todos.map((todo) => {
      return (
        <Card
          key={todo.id}
          item={todo}
          completedTodo={this.props.completedTodo}
          deleteTodo={this.props.deleteTodo}
          editTodo={this.props.editTodo}
          openModal={this.openModal}
          isOpen={this.state.isOpen}
        />
      );
    });
    return <div className="todoList">{cards}</div>;
  }
}
