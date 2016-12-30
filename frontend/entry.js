// React
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Components
import Splash from './components/splash';

// Firebase
import { initializeFirebaseApp } from '../api/firebase/initialize';

// initalize Firebase app
initializeFirebaseApp();

const App = () => (
  <Provider store={store}>
    <Splash />
  </Provider>
);

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
});
