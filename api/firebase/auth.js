import firebase, { auth, database } from 'firebase';

function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    name: name,
    email: email,
    profile_picture_url: imageUrl,
  });
}

export function authenticateUserByFacebook() {
  const provider = new firebase.auth.FacebookAuthProvider();

  firebase.auth().signInWithPopup(provider)
  .then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log('SIGN IN SUCCESS', user);

    const { uid, displayName, email, photoURL } = user;

    // add user data to /users (stored separate in firebase than auth)
    writeUserData(uid, displayName, email, photoURL);
  })
  .catch(function(error) {
    console.log('SIGN IN ERROR', error);
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

export function signOutUser() {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    console.log('Signout SUCCESS');
  }, function(error) {
    console.log('Signout ERROR');
    return error;
    // An error happened.
  });
}
