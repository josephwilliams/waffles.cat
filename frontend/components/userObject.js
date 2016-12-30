import React from 'react';

const UserObject = ({ name, imageUrl }) => (
  <div className="user-object-container">
    <img src={imageUrl} />
  </div>
);

export default UserObject;
