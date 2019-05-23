import React from 'react'
import {Link} from 'react-router-dom'

export default class UsersIndexItem extends React.Component {
  constructor(props){
    super(props);
    const following = this.props.currentUser.usersFollowing ? !! this.props.currentUser.usersFollowing[this.props.user.id] : false;
    this.state = {
      following: following
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

    const followButtonText = this.state.following ? 'Unfollow' : 'Follow';

    return(
      <div>
      <Link to={`/users/${user.id}`}>
        <img src={user.profilePictureUrl} className="user-profile-picture"/> 
        <span>{user.username}</span>
        <button onClick={this.toggleFollow}>{followButtonText}</button>
      </Link>
      </div>
    )
  }  
}