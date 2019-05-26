import React from 'react'
import SongsIndexItemContainer from '../shared_song_index/songs_index_item_container'

export default class FavoritesIndex extends React.Component{
  componentDidMount(){
    document.title = "Favorites";
    this.props.startLoading();
    this.props.fetchFavoriteSongsOfUser(this.props.currentUserId)
      .then(()=>this.props.stopLoading());
  }
  render(){
    const {favoriteSongs, loading} = this.props;

    if(loading){
      return(
        <div class="loading-spinner">
          <div class="la-ball-clip-rotate la-dark la-3x">
            <div></div>
          </div>
        </div>
      )
    }

    const favoriteSongsList = favoriteSongs.map(song => (song ? <SongsIndexItemContainer song={song} key={`favorite-song`+song.id} /> : null))
    return(
      <div>{favoriteSongsList}</div>
    )
  }
}