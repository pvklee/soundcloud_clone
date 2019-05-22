import React from 'react'
import {Link} from 'react-router-dom'

export default class UsersIndexItem extends React.Component {
  render(){
    const {currentUser, user} = this.props;
    return(
      <div>
      <Link to={`/users/${user.id}`}>
        <img src={user.profilePictureUrl} className="user-profile-picture"/> 
        <span>{user.username}</span>
      </Link>
      </div>
    )
  }  
}