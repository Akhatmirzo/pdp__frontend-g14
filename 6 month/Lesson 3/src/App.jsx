import React, { Component } from "react";
import Todo from "./components/Todo/Todo";

export default class App extends Component {

  render() {
    return (
     <div className="container">
     <Todo/>
     </div>
    );
  }
}
