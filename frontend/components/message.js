import React from 'react';

const Message = ({ user, content }) => {
  return (
    <div className="message-wrapper">
      <div className="message-container">
        <div className="message-user-image">
          <img src={'/lolcat.png'} />
        </div>
        <div className="message-content">
          <div className="message-username">
            {user}
          </div>
          <div className="message-text">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
