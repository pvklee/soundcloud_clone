import React from 'react'
import SongsIndexItemContainer from '../shared_song_index/songs_index_item_container'

export default class UserSongsIndex extends React.Component {
  render(){
    const {songs, userId, currentUserId, loading} = this.props;

    if(loading){
      return(
        <div class="loading-spinner">
          <div class="la-ball-clip-rotate la-dark la-3x">
            <div></div>
          </div>
        </div>
      )
    }
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
