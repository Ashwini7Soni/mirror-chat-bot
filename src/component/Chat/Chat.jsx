import React, { useState } from 'react';
import { useEffect } from 'react';
import "./Chat.css";
import sendbuttonSrc from "../../images/send.png";
import Message from "../Message/Message";
import ReactScrollToBottom from "react-scroll-to-bottom";
import chatbotImage from "../../images/chatbotImage.jpg";

const Chat = () => {
  useEffect(() => {

    const startMessage = "Welcome to the chat";
    if(localStorage.getItem("message") === null) {
      localStorage.setItem("message", startMessage);
    }
    window.onload = function() {
      if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
      }
    }
  }, []);
  
  const [messages, setmessages] = useState(localStorage.getItem("message") && localStorage.getItem("message").split(","));
  
  const send = () => {
    const input = document.getElementById("chatInput").value;
    setmessages([...messages, input]);
    localStorage.setItem("message", [...messages, input]);
    document.getElementById("chatInput").value = "";
  }
  
  
  return (
    <div className='chatPage'>
        <div className='chatContainer'>
            <div className='header'>
              <img src = {chatbotImage} alt = "ChatbotIcon" id = "chatbotImage"/>
              <h2>CHATBOT</h2>
            </div>
            <ReactScrollToBottom className='chatBox'>
              {
                messages && messages.map((item, index) => {
                  return <Message message = {item} key = {index}/>
                } 
                )
              }
                 
            </ReactScrollToBottom>
            <div className='inputBox'>
                <input onKeyPress={(event) => event.key === 'Enter'? send(): ""} type = "text" id = "chatInput" placeholder='Message'/>
                <button onClick={send} className='sendBtn'><img src={sendbuttonSrc} alt='Send'/></button>
            </div>
        </div>
    </div>
  )
}

export default Chat;