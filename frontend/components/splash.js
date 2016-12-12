import React from 'react';

import Cat from './cat';
import MessagesContainer from './messagesContainer';
import LoginFacebook from './LoginFacebook';

const Splash = () => {
  return (
    <div className="splash-container">
      <Cat />
      <LoginFacebook />
    </div>
  );
};

export default Splash;
