import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAKj4YbpLyig2QOb0qFIZRV8gHLRD2I8_g",
  authDomain: "waffles-87672.firebaseapp.com",
  databaseURL: "https://waffles-87672.firebaseio.com",
  storageBucket: "waffles-87672.appspot.com",
  messagingSenderId: "30011915731",
};

export function initializeFirebaseApp() {
  console.log('initalizing firebase app');
  firebase.initializeApp(config);

  // new Promise(
  //   firebase.initializeApp(config);
  // ).then((app) => {
  //   console.log('good initalize', app);
  // }).catch((error) => {
  //   console.log('bad initalize', error);
  // });
}
