import React, { Component } from "react";
import logoIcon from "../assets/logo.png";
import loadingImg from "../assets/loading.gif";

class Loading extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.dynamicClass === 'loadingStop' ? 'loadingStop' : 'loadingStart'}>
        <span>답변을 입력하고 있어요...</span>
        <img src={loadingImg} width="95px" height="50px" alt="Loading..." />
      </div>
    );
  }
}

export default Loading;
