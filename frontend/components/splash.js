import React, { Component } from 'react';

import {
  getCurrentUserBasic,
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

  componentDidMount() {
    const currentUser = getCurrentUserBasic();
    this.setState({ currentUser: currentUser });
  }

  render() {
    const { currentUser } = this.state;
    console.log('RENDER current user check', currentUser);

    return (
      <div className="splash-container">
        <CatImage />
        { !currentUser ? <LoginFacebook /> : <SignOutButton /> }
      </div>
    );
  }
}
