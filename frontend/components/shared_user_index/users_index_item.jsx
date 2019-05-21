import React from 'react'

export default class UsersIndexItem extends React.Component {
  render(){
    const {currentUser, user} = this.props;
    return(
      <div>{user.username}</div>
    )
  }  
}