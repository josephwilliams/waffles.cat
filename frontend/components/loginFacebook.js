import React from 'react';

// import {
//   authenticateUserByFacebook,
// } from '../../api/firebase/auth';

const FacebookLogin = ({ onButtonClick }) => {
  return (
    <div
      className="facebook-login-container"
      onClick={() => onButtonClick()}
    >
      <img src="http://www.yegara.com/am/sp/fbin.png" />
    </div>
  );
};

export default FacebookLogin;
