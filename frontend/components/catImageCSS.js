import React from 'react';
import _ from 'lodash';
import ReactTooltip from 'react-tooltip';

const catSounds = ['meow', 'purr', 'hiss', 'hello'];

const Cat = () => (
  <div className="cat-wrapper">
    <div
      className="cat-container-circle"
      data-event='click'
      data-for='getContent'
      data-tip
    >
    <ReactTooltip
      id="getContent"
      className="tooltip"
      getContent={() => _.sample(catSounds)}
    />
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
    <div className="cat-text">
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

export default Cat;
