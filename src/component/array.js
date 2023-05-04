import React, { useState } from "react";
import Chat from "./chat";
import axios from "axios";

const Array = (e) => {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState([]);
  const [resList, setResList] = useState([]);

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onClick = (e) => {
    const newList = list.concat(inputText);
    setList(newList);
    setInputText("");

    // 질문이 등록됐을을 때, axios 호출해서 답변을 받아온다.
    axios
      .get("https://codingapple1.github.io/shop/data2.json")
      .then((result) => {
        const newList = resList.concat(result.data[0].content);
        setResList(newList);
      })
      .catch(() => {
        //error
      });
  };

  return (
    <div className="chatBox">
      <div className="chat">
        <div>
          {list.map((data, i) => (
            <Chat name={data} key={i} />
          ))}
        </div>
        <div>
          {resList.map((data, i) => (
            <Chat name={data} key={i} />
          ))}
        </div>
      </div>
      <div className="send">
        <div className="sendForm">
          <input
            className="myInput"
            type="text"
            value={inputText}
            onChange={onChange}
          />
        </div>
        <button className="sendBtn" onClick={onClick}>
          send
        </button>
      </div>
    </div>
  );
};

export default Array;
