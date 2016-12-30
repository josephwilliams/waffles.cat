// React
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Components
import Splash from './components/splash';

// Firebase
import * as firebase from 'firebase';


// Initialize Firebase
const config = {
  apiKey: "AIzaSyAKj4YbpLyig2QOb0qFIZRV8gHLRD2I8_g",
  authDomain: "waffles-87672.firebaseapp.com",
  databaseURL: "https://waffles-87672.firebaseio.com",
  storageBucket: "waffles-87672.appspot.com",
  messagingSenderId: "30011915731",
};

firebase.initializeApp(config);

const App = () => (
  <Provider store={store}>
    <Splash />
  </Provider>
);

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
});
