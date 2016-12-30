import React, { Component } from 'react';

import {
  getCurrentUser,
} from '../../api/firebase/users';

import CatImage from './catImageCSS';
import LoginFacebook from './loginFacebook';
import SignOutButton from './SignOutButton';

export default class Splash extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  componentWillMount() {
    const currentUser = getCurrentUser();
    this.setState({ currentUser: currentUser });
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="splash-container">
        <CatImage />
        {!currentUser ?
          <LoginFacebook currentUser={currentUser} />
          :
          <SignOutButton />
        }
      </div>
    );
  }
}
