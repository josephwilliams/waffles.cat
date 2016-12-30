import React, { Component } from 'react';
import firebase, { auth, database } from 'firebase';

import _ from 'lodash';

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
      
      console.log('ALL USERS', users);

      let usersArr = [];
      _.forOwn(users, (user, key) => {
        usersArr.push(user);
      });

      that.setState({ users: usersArr });
    });
  }

  displayUserName(name) {
    this.setState({ hoveredOverUser: name });
  }

  displayNoName() {
    this.setState({ hoveredOverUser: '' });
  }

  render() {
    const { users, hoveredOverUser } = this.state;

    return (
      <div className="users-wrapper">
        <div className="users-container" onMouseLeave={()=>this.displayNoName()}>
          {!!users &&
            users.map((user, idx) => {
              const { name, profile_picture_url } = user;
              console.log('user', name, profile_picture_url);
              return (
                <div onMouseOver={()=>this.hoverOverUser(name)} key={idx}>
                  <UserObject
                    name={name}
                    imageUrl={profile_picture_url}
                  />
                </div>
              );
            })
          }
        </div>
        <div className="hovered-user-display">
          {hoveredOverUser}
        </div>
      </div>
    )
  }
}
