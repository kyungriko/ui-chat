import React, { Component } from "react";
import "./App.css";
import Array from "./component/array";
class App extends Component {
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
