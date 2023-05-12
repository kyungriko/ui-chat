import React, { Component } from "react";
import logoIcon from "../assets/logo.png";
import axios from "axios";
import { CopyBlock, github } from "react-code-blocks";

class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatValue: props.name,
      id: props.id,
      seq: props.seq,
      answerCode: props.answerCode,
      answerScript: props.answerScript,
      exUrl: props.answerUrl,
    };

    this.handleClick = this.handleClick.bind(this);
    this.exOpenClick = this.exOpenClick.bind(this);
  }
  handleClick() {
    let req = {
      id: this.props.id,
      question: this.state.chatValue,
      path: "C:/FinTech_Solution/SP6_workspace/kit_test_project/WebContent/example_data",
      // path: "/Users/jihyun/Desktop/working/websquare-workspace/test/WebContent/example_down",
    };
    axios
      .post("http://127.0.0.1:3000/chat/call/code", req)
      .then((result) => {})
      .catch(() => {
        //error
      });
  }
  exOpenClick() {
    let url = this.state.exUrl;
    window.open(url, "_blank", "menubar=no, toolbar=no");
  }

  render() {
    if (this.state.answerScript) {
      return (
        <div className="answerChat" key={this.state.id}>
          <div className="answerUsericon">
            <img src={logoIcon} width="40px" height="40px" alt="user" />
          </div>
          <div className="msgBox">
            <p key={this.state.id}>{this.state.chatValue}</p>
          </div>
          <div className="msgBoxCode">
            <CopyBlock
              text={this.state.answerScript}
              language={"javascript"}
              showLineNumbers={false}
              startingLineNumber={true}
              wrapLongLines={true}
              theme={github}
              customStyle={{
                width: "250px",
                height: "250px",
                overflowY: "scroll",
                fontSize: "0.75rem",
              }}
            />
            {/* <p key={this.state.id}>{this.state.answerCode}</p> */}
          </div>
          <button className="downloadBtn" onClick={this.handleClick}>
            예제 파일 다운로드
          </button>
          <button className="openExBtn" onClick={this.exOpenClick}>
            새 창에서 열기
          </button>
        </div>
      );
    } else {
      return (
        <div className="answerChat" key={this.state.id}>
          <div className="answerUsericon">
            <img src={logoIcon} width="40px" height="40px" alt="user" />
          </div>
          <div className="msgBox">
            <p key={this.state.id}>{this.state.chatValue}</p>
          </div>
          <button className="downloadBtn" onClick={this.handleClick}>
            예제 파일 다운로드
          </button>
          <button className="openExBtn" onClick={this.exOpenClick}>
            새 창에서 열기
          </button>
        </div>
      );
    }
  }
}

export default Answer;
