import React from 'react';

import ReactTooltip from 'react-tooltip';

export default class Cat extends React.Component {
  constructor () {
    super();
  }

  render () {
    return (
    <div className="cat-container-circle" data-tip="meow" data-event='click'>
    <ReactTooltip class="tooltip" delayHide={100} />
      <div className="cat-body">
        <div className="cat-ear left" />
        <div className="cat-ear right" />
        <div className="cat-ear-inside left" />
        <div className="cat-ear-inside right" />
        <div className="cat-eye left" />
        <div className="cat-eye right" />
        <div className="cat-mouth" />
      </div>
    </div>
    );
  }
}
