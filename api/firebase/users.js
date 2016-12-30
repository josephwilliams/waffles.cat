import firebase, { auth, database } from 'firebase';


export function getAllUsers() {
  return firebase.database().ref('/users').once('value').then(function(snapshot) {
    var users = snapshot.val();
    console.log('all users', users);
  });
}

export function getCurrentUserBasic() {
  return firebase.auth().currentUser;
}

export function getCurrentUser() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log('CURRENT USER', user);
      return user;
    } else {
      // No user is signed in.
      console.log('NO CURRENT USER');
      return null;
    }
  });
}
