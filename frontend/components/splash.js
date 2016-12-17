import React from 'react';

import {
  getCurrentUser,
  // signOutUser,
} from '../../api/firebase/users';

import Cat from './cat';
import MessagesContainer from './messagesContainer';
import LoginFacebook from './LoginFacebook';

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
        {!currentUser && <LoginFacebook currentUser={currentUser} />}
      </div>
    );
  }
}
