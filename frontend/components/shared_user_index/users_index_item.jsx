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
    if(!this.props.currentUser) {this.props.openLoginFormModal();}
    else {
      this.state.following ? this.setUnfollowUser() : this.setFollowUser();
    }
  }

  setFollowUser(){
    const {user, followUser} = this.props;
    followUser(user.id);
    this.setState({following: true})
  }

  setUnfollowUser(){
    const {user, unfollowUser} = this.props;
    unfollowUser(user.id);
    this.setState({following: false})
  }
  
  render(){
    const {currentUser, user} = this.props;

    const followButtonText = this.state.following ? 'Following' : 'Follow';
    const followButtonClass = this.state.following? 'follow-button follow-button-following' : 'follow-button follow-button-follow'
    const image = user.profilePictureUrl ? <img src={user.profilePictureUrl}/> : null;
    return(
      <div className="user-index-item">
        <div>
          <Link to={`/users/${user.id}`}>
            <div className="user-profile-picture">
              {image}
            </div>
          </Link>
        </div>
        <div className="user-index-item-username-follow">
          <Link to={`/users/${user.id}`}>
            <span className="user-index-item-username">{user.username}</span>
          </Link>
          <button onClick={this.toggleFollow} className={followButtonClass}>{followButtonText}</button>
        </div>
      </div>
    )
  }  
}