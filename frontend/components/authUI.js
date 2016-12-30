import React, { Component } from 'react';
import firebase, { auth, database } from 'firebase';

import {
  writeUserData,
  getCurrentUserBasic,
} from '../../api/firebase/users';

import LoginFacebook from './loginFacebook';
import SignOutButton from './SignOutButton';

export default class Splash extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
    this.authenticateUserByFacebook = this.authenticateUserByFacebook.bind(this);
    this.signOutUser = this.signOutUser.bind(this);
  }

  getCurrentUser() {
    const that = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        console.log('>> auth.js CURRENT USER', user);
        that.setState({ currentUser: user });
      } else {
        // No user is signed in.
        console.log('>> auth.js NO CURRENT USER');
        return null;
      }
    });
  }

  authenticateUserByFacebook() {
    const that = this;

    const provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log('SIGN IN SUCCESS', user);

      that.setState({ currentUser: user });

      const { uid, displayName, email, photoURL } = user;
      // add user data to /users (stored separate in firebase than auth)
      writeUserData(uid, displayName, email, photoURL);
    })
    .catch(function(error) {
      console.log('SIGN IN ERROR', error);
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  signOutUser() {
    const that = this;
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      console.log('Signout SUCCESS');
      that.setState({ currentUser: null });
    }, function(error) {
      console.log('Signout ERROR');
      return error;
      // An error happened.
    });
  }

  componentDidMount() {
    this.getCurrentUser();
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="auth-container">
        { !currentUser ?
          <LoginFacebook onButtonClick={this.authenticateUserByFacebook}/>
          :
          <SignOutButton onButtonClick={this.signOutUser} /> }
      </div>
    );
  }
}
