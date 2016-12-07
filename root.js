// React
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Splash from './components/splash';

document.addEventListener("DOMContentLoaded", () => {
  var root = document.getElementById("root");
  ReactDOM.render(<Splash />, root);
});
