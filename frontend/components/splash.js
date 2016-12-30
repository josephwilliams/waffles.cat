import React, { Component } from 'react';

import {
  getCurrentUserBasic,
} from '../../api/firebase/users';

import CatImage from './catImageCSS';
import AuthUI from './authUI';
import UsersContainer from './usersContainer';

export default class Splash extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="splash-container">
        <div className="splash-container-cat">
          <CatImage />
        </div>
        <div className="splash-container-content">
          <AuthUI />
          <UsersContainer />
        </div>
      </div>
    );
  }
}
