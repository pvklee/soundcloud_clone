import React from 'react'
import SongsIndexItemContainer from '../shared_song_index/songs_index_item_container'

export default class UserSongsIndex extends React.Component {
  render(){
    const {songs, userId, currentUserId} = this.props;
    if (!songs) return null;

    const songsList = songs.map(song=>{
      return song ? <SongsIndexItemContainer key={song.id} song={song} /> : null;
    })

    return (
      <div>
        {songsList}
      </div>
    )
  }
}
