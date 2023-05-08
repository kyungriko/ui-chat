import React, { useState } from "react";
import Chat from "./chat";
import Answer from "./answer";
import axios from "axios";

const Array = (e) => {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState([]);
  const [resList, setResList] = useState([]);
  let [chatList, setChatList] = useState([]);
  const [counter, setCounter] = useState(0);

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const updateChatHistory = (type, str) => {
    setChatList((prevState) => {
      let result = {};
      if (type === "answer") {
        let tempList = [...prevState];
        let len = tempList.length;
        result = {
          question: tempList[len - 1].question,
          answer: str,
          qId: tempList[len - 1].qId,
          aId: tempList[len - 1].aId,
        };

        tempList[len - 1] = result;
        return [...tempList];
      } else {
        let tempList = [...prevState];
        result = {
          question: str,
          answer: "",
          qId: "q" + counter,
          aId: "a" + counter,
        };
        return [...tempList, result];
      }
    });
  };

  const onClick = (e) => {
    const newList = list.concat(inputText);
    setList(newList);
    setCounter(counter + 1);
    updateChatHistory("question", inputText);
    setInputText("");

    let req = { message: inputText };

    // 질문이 등록됐을을 때, axios 호출해서 답변을 받아온다.
    axios
      .post("http://127.0.0.1:3000/chat/call", req)
      .then((result) => {
        const newList = resList.concat(result.data.message);
        setResList(newList);
        updateChatHistory("answer", result.data.message);
      })
      .catch(() => {
        //error
      });
  };

  return (
    <div className="chatBox">
      <div className="chatHeader"></div>
      <div className="chat">
        <div className="chatTitle">WebSquare5 SP6의 예제가 궁금하세요?</div>
        {list.map((data, i) => {
          return (
            <div className="chatContainer" key={i}>
              <div className="questionContainer" key={chatList[i].qId}>
                <Chat name={data} id={chatList[i].qId + "question_list"} />
              </div>
              <div className="answerContainer" key={chatList[i].aId}>
                {resList.map((el, idx) => {
                  if (idx === i) {
                    return (
                      <Answer name={el} id={chatList[i].aId + "answer_list"} />
                    );
                  }
                })}
                ;
              </div>
            </div>
          );
        })}
      </div>
      <div className="send">
        <div className="sendForm">
          <input
            className="myInput"
            type="text"
            placeholder="궁금한 내용을 입력하세요..."
            value={inputText}
            onChange={onChange}
          />
          <button className="sendBtn" onClick={onClick}></button>
        </div>
      </div>
    </div>
  );
};

export default Array;
