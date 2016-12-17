import firebase from 'firebase';

const database = firebase.database();

export function getAllUsers() {

}

export function getCurrentUser() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log('CURRENT USER', user);
      return user;
    } else {
      // No user is signed in.
      console.log('NO CURRENT USER');
      return null;
    }
  });
}