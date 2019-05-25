import React from 'react'
import {Link} from 'react-router-dom'

export default class UsersIndexItem extends React.Component {
  constructor(props){
    super(props);
    let followingState;
    if(this.props.currentUser && this.props.currentUser.usersFollowedIds){
      followingState = this.props.currentUser.usersFollowedIds.includes(this.props.user.id);
    } else {
      followingState = false;
    }
    this.state = {
      following: followingState
    }
    this.toggleFollow = this.toggleFollow.bind(this);
    this.setFollowUser = this.setFollowUser.bind(this);
    this.setUnfollowUser = this.setUnfollowUser.bind(this);
  }

  toggleFollow(e){
    e.preventDefault();
    this.state.following ? this.setUnfollowUser() : this.setFollowUser();
  }

  setFollowUser(){
    const {user, followUser, currentUser,openLoginFormModal} = this.props;
    if(!currentUser) {openLoginFormModal();}
    else{
      followUser(user.id);
      this.setState({following: true})
    };
  }

  setUnfollowUser(){
    const {user, unfollowUser} = this.props;
    unfollowUser(user.id);
    this.setState({following: false})
  }
  
  render(){
    const {currentUser, user} = this.props;

    const followButtonText = this.state.following ? 'Following' : 'Follow';

    return(
      <div className="user-index-item">
        <div>
          <Link to={`/users/${user.id}`}>
            <img src={user.profilePictureUrl} className="user-profile-picture"/> 
          </Link>
        </div>
        <div className="user-index-item-username-follow">
          <Link to={`/users/${user.id}`}>
            <span className="user-index-item-username">{user.username}</span>
          </Link>
          <button onClick={this.toggleFollow} className="toggle-follow-button">{followButtonText}</button>
        </div>
      </div>
    )
  }  
}