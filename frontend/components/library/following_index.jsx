import React from 'react'
import UsersIndexItemContainer from '../shared_user_index/users_index_item_container'

export default class FollowingIndex extends React.Component{
  componentDidMount(){
    document.title = "Following";
    this.props.startLoading();
    this.props.fetchUsersFromUserIds(this.props.currentUser.usersFollowedIds)
      .then(()=>this.props.stopLoading());
  }
  render(){
    const {following, loading} = this.props;

    if(loading){
      return(
        <div class="loading-spinner">
          <div class="la-ball-clip-rotate la-dark la-3x">
            <div></div>
          </div>
        </div>
      )
    }

    if (!following) {return null};
    
    const followedUsersList = following.map(user => user ? (
        <UsersIndexItemContainer user={user} key={`following`+user.id} />
      ) : (
        null
      )
    )

    return(
      <div>{followedUsersList}</div>
    )
  }
}