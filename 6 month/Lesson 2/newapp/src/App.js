import React, { Component } from "react";
import Card from "./Components/Cards/Card";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Akhatmirzo",
      describe: "lorem ipsum dolor sit amet",
    };

    this.changeName = this.changeName.bind(this);
  }

  changeName(Newname) {
    this.setState({ name: Newname });
  }

  render() {
    const { name, describe } = this.state;
    return (
      <>
        <Card name={name} describtion={describe} changeName={this.changeName} />
      </>
    );
  }
}
