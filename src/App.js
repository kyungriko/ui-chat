import React, { Component, useRef, useState } from "react";
import "./App.css";
import Array from "./component/array";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enteredValue: "",
      chats: [],
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Array />
        </header>
      </div>
    );
  }
}

export default App;
