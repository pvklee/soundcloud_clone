import React from 'react'
import UsersIndexItemContainer from '../shared_user_index/users_index_item_container'

export default class FollowingIndex extends React.Component{
  componentDidMount(){
    document.title = "Following";
  }
  render(){
    const {following} = this.props;
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