import React, { Component } from "react";
import userIcon from "../assets/man.png";

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
      <div className="questionChat" key={this.state.id}>
        <div className="msgBox">
          <p key={this.state.id}>{this.state.chatValue}</p>
        </div>
        <div className="questionUsericon">
          <img
            className="userIcon"
            src={userIcon}
            width="25px"
            height="30px"
            alt="user"
          />
        </div>
      </div>
    );
  }
}

export default Chat;
