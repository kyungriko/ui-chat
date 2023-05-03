import React, { useState } from "react";
import Chat from "./chat";

const Array = (e) => {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState([]);

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onClick = (e) => {
    const newList = list.concat(inputText);
    setList(newList);
    setInputText("");
  };

  return (
    <div className="chatBox">
      <div className="chat">
        <div>
          {list.map((data, i) => (
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
