import React from 'react';

// import {
//   signOutUser,
// } from '../../api/firebase/auth';

const SignOutButton = ({ onButtonClick }) => (
  <div className="signout-button-wrapper">
    <div
      className="signout-button"
      onClick={()=>onButtonClick()}
    >
      {'SIGN OUT'}
    </div>
  </div>
);

export default SignOutButton;
