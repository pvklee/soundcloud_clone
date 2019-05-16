import React from 'react'
import UserSongsIndexItemContainer from './user_songs_index_item_container'

export default class UserSongsIndex extends React.Component {
  render(){
    const {songs, userId, currentUserId} = this.props;
    if (!songs[0]) return null;

    const songsList = songs.map(song=>(
      <UserSongsIndexItemContainer key={song.id} song={song} currentUserId={currentUserId}/>
    ))

    return (
      <div>
        {songsList}
      </div>
    )
  }
}
