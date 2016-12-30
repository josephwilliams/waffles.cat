import React, { Component } from 'react';
import firebase, { auth, database } from 'firebase';

import UserObject from './userObject';

export default class UsersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      hoveredOverUser: '',
    };
  }

  componentDidMount() {
    const that = this;
    return firebase.database().ref('/users').once('value').then(function(snapshot) {
      var users = snapshot.val();
      console.log('all users', users);
    });
  }

  displayUserName(name) {
    this.setState({ hoveredOverUser: name });
  }

  displayNoName() {
    this.setState({ hoveredOverUser: '' });
  }

  render() {
    const { users } = this.state;

    return (
      <div className="users-container" onMouseLeave={()=>this.displayNoName()}>
        {!!users &&
          users.map((user, idx) => {
            const { name, profile_picture_url } = user;
            return (
              <div onMouseOver={()=>this.hoverOverUser(name)}>
                <UserObject
                  name={name}
                  imageUrl={profile_picture_url}
                />
              </div>
            );
          })
        }
      </div>
    )
  }
}
