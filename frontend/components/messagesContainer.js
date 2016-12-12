import React, { Component } from 'react';

import Message from './message';

const MessagesContainer = () => {

  // const user1 = { username: 'Joe' };
  const content1 = 'waffles is the coolest';
  const content2 = 'lorem ipsum long message that is very very very long to test the length of its container or whatever';

  return (
    <div className="messages-container">
      <Message user={'Rick'} content={content1} />
      <Message user={'Morty'} content={content2} />
    </div>
  );
}

export default MessagesContainer;
