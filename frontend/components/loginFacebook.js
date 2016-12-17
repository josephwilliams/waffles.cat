import React from 'react';
import firebase from 'firebase';

import {
  authenticateUserByFacebook,
  // signOutUser,
} from '../../api/firebase/auth';

const FacebookLogin = ({ currentUser }) => {
  return (
    <div className="auth-wrapper">
      {currentUser &&
        <div
          className="facebook-login-container"
          onClick={() => authenticateUserByFacebook()}
        >
          <img src="http://www.yegara.com/am/sp/fbin.png" />
        </div>
      }
    </div>
  );
};

export default FacebookLogin;
