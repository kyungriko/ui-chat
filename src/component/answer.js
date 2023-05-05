import React, { Component } from "react";

class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatValue: props.name,
      id: props.id,
    };
  }

  render() {
    return (
      <div className="test">
        <div className="msgBox" id={this.state.id}>
          <p>{this.state.chatValue}</p>
        </div>
      </div>
    );
  }
}

export default Answer;
