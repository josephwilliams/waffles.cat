import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAKj4YbpLyig2QOb0qFIZRV8gHLRD2I8_g",
  authDomain: "waffles-87672.firebaseapp.com",
  databaseURL: "https://waffles-87672.firebaseio.com",
  storageBucket: "waffles-87672.appspot.com",
  messagingSenderId: "30011915731",
};

// Initialize Firebase
export function initializeFirebaseApp() {
  console.log('initalizing firebase app');
  firebase.initializeApp(config);
}
