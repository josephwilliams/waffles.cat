import React from 'react';
import ReactTooltip from 'react-tooltip';

const UserObject = ({ name, imageUrl }) => (
  <div className="user-object-container" data-tip={name}>
    <ReactTooltip place="bottom" type="light" effect="float" />
      <img src={imageUrl} />
  </div>
);

export default UserObject;
