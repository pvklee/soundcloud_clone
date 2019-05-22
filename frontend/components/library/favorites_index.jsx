import React from 'react'
import SongsIndexItemContainer from '../shared_song_index/songs_index_item_container'

export default class FavoritesIndex extends React.Component{
  render(){
    const {songs, favoriteSongIds} = this.props;
    const favoriteSongsList = favoriteSongIds.map(id => (songs[id] ? <SongsIndexItemContainer song={songs[id]} key={`favorite-song`+id} /> : null))
    return(
      <div>{favoriteSongsList}</div>
    )
  }
}