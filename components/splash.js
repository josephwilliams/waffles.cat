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
        <div className="title-text">
          <div className="text-waffles">
            {'waffles'}
          </div>
          <div className="text-the">
            {'the'}
          </div>
          <div className="text-cat">
            {'cat'}
          </div>
        </div>
      </div>
    );
  }
}
