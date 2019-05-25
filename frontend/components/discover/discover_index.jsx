import React from 'react'
import SongsIndexItemContainer from '../shared_song_index/songs_index_item_container'

export default class DiscoverIndex extends React.Component {
  componentDidMount(){
    document.title = "Discover"
    this.props.startLoading();
    this.props.fetchSongs().then(() => this.props.stopLoading());
  }
  render(){
    const {songs, filteredSongIds, loading} = this.props;
    if (loading) {return (
      <div class="loading-spinner">
        <div class="la-ball-clip-rotate la-dark la-3x">
          <div></div>
        </div>
      </div>
    )};
    if (!filteredSongIds) {return null};
    let songsList = [];
    filteredSongIds.forEach((id)=>{
      songs[id] ? songsList.push(<SongsIndexItemContainer key={id} song={songs[id]}/>) : null
    });

    return (
      <div>
        <div className="main-info-container">
          Discover your new favorite song.
        </div>
        {songsList}
      </div>
    )
  }
}
