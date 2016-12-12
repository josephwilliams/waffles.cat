import React from 'react';

import Cat from './cat';

export default class Splash extends React.Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div className="splash-container">
        <Cat />
      </div>
    );
  }
}
