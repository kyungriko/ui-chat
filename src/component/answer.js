import React, { Component } from "react";
import logoIcon from "../assets/logo.png";
import loadingImg from "../assets/loading.webp";
import axios from "axios";

class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatValue: props.name,
      id: props.id,
      seq: props.seq,
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    let req = {
      id: this.props.id,
      question: this.state.chatValue,
      path: "C:/FinTech_Solution/SP6_workspace/kit_test_project/WebContent/example_data",
    };
    axios
      .post("http://127.0.0.1:3000/chat/call/code", req)
      .then((result) => {})
      .catch(() => {
        //error
      });
  }

  render() {
    return (
      <div className="answerChat" key={this.state.id}>
        <div className="answerUsericon">
          <img src={logoIcon} width="40px" height="40px" alt="user" />
        </div>
        <div className="msgBox">
          <p key={this.state.id}>{this.state.chatValue}</p>
        </div>
        <button onClick={this.handleClick}>예제 파일 다운로드</button>
      </div>
    );
    // if(this.props.id.indexOf("loading") > -1) {
    //   return(
    //     <div className="answerChat" key={this.state.id}>
    //       <div className="answerUsericon">
    //         <img src={logoIcon} width="40px" height="40px" alt="user" />
    //       </div>
    //       <div className="msgBox">
    //         <img src={loadingImg} width="100px" height="70px" alt="Loading..." />
    //       </div>
    //       <button onClick={this.handleClick}>예제 파일 다운로드</button>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div className="answerChat" key={this.state.id}>
    //       <div className="answerUsericon">
    //         <img src={logoIcon} width="40px" height="40px" alt="user" />
    //       </div>
    //       <div className="msgBox">
    //         <p key={this.state.id}>{this.state.chatValue}</p>
    //       </div>
    //       <button onClick={this.handleClick}>예제 파일 다운로드</button>
    //     </div>
    //   );
    // }
    
  }
}

export default Answer;
