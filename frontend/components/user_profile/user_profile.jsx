import React from 'react'
import UserSongsIndexContainer from './user_songs_index_container'

export default class UserProfile extends React.Component {
  componentDidMount(){
    this.props.fetchUser(this.props.userId);
    this.props.fetchSongsFromUser(this.props.userId);
  }

  componentDidUpdate(prevProps){
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.props.fetchUser(this.props.userId);
      this.props.fetchSongsFromUser(this.props.userId);
    }
  }

  render(){
    if (!this.props.user) return null;

    const createdSongIds = this.props.user.createdSongIds || []
    return (
      <div>
        {this.props.user.username}
        <UserSongsIndexContainer songIds={createdSongIds}/>
      </div>
    )
  }
}
