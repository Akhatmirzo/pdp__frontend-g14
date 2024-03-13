import React, { Component } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 0,
          task: "Feeding dog",
          date: "2123123",
          completed: true,
        },
      ],

      isOpen: false,
    };
    this.addTodo = this.addTodo.bind(this);
    this.completedTodo = this.completedTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }

  addTodo(todo) {
    const newTodo = {
      id: this.state.todos.length,
      ...todo,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  completedTodo(id) {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos: newTodos });
  }

  deleteTodo(id) {
    const newTodos = this.state.todos.filter((todo) => todo.id !== id);

    this.setState({ todos: newTodos });
  }

  editTodo(id, editing) {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        let newTodo = { ...todo, ...editing };
        return newTodo;
      } else {
        return todo;
      }
    });
    this.setState({ todos: newTodos });
  }

  render() {
    return (
      <>
        <TodoForm addTodo={this.addTodo} todo />;
        <TodoList
          todos={this.state.todos}
          completedTodo={this.completedTodo}
          deleteTodo={this.deleteTodo}
          editTodo={this.editTodo}
        />
      </>
    );
  }
}
