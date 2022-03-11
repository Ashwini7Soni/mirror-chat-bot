import React from 'react';
import "./Message.css";

const Message = ({message}) => {
  
    return (
      <>
        <div className={`messageBox right`} >
          {`You: ${message}`}
        </div>
        <div className={`messageBox left`} >
          {`Bot: ${message}`}
        </div>
      </>
    )
}

export default Message;