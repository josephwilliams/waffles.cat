import React from 'react';

import {
  signOutUser,
} from '../../api/firebase/auth';

const SignOutButton = () => (
  <div className="signout-button-wrapper">
    <div
      className="signout-button"
      onClick={()=>signOutUser()}
    >
      {'SIGN OUT'}
    </div>
  </div>
);

export default SignOutButton;
