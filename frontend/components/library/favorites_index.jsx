import React from 'react'
import SongsIndexItemContainer from '../shared_song_index/songs_index_item_container'

export default class FavoritesIndex extends React.Component{
  componentDidMount(){
    document.title = "Favorites";
  }
  render(){
    const {songs, favoriteSongs, loading} = this.props;

    const favoriteSongsList = favoriteSongs.map(song => (song ? <SongsIndexItemContainer song={song} key={`favorite-song`+song.id} /> : null))
    return(
      <div>{favoriteSongsList}</div>
    )
  }
}