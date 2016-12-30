import React, { Component } from 'react';

import {
  getCurrentUserBasic,
} from '../../api/firebase/users';

import CatImage from './catImageCSS';
import AuthUI from './authUI';

export default class Splash extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="splash-container">
        <CatImage />
        <AuthUI />
      </div>
    );
  }
}
