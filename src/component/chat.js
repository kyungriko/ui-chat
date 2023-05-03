import React, { Component } from "react";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatValue: props.name,
      id: props.id,
    };
  }

  render() {
    return (
      <div className="msgLine" id={this.state.id}>
        <div className="msgBox">
          <p>{this.state.chatValue}</p>
        </div>
      </div>
    );
  }
}

export default Chat;
