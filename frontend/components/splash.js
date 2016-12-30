import React, { Component } from 'react';

import {
  getCurrentUser,
} from '../../api/firebase/users';

import Cat from './catImageCSS';
import MessagesContainer from './messagesContainer';
import LoginFacebook from './loginFacebook';
import SignOutButton from './SignOutButton';

export default class Splash extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    const currentUser = getCurrentUser();
    this.setState({ currentUser: currentUser });
  }

  render() {
    const { currentUser } = this.state;
    
    return (
      <div className="splash-container">
        <Cat />
        {!currentUser ?
          <LoginFacebook currentUser={currentUser} />
          :
          <SignOutButton />
        }
      </div>
    );
  }
}
