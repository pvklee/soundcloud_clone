import React from 'react'
import SongsIndexItemContainer from '../shared_song_index/songs_index_item_container'

export default class StreamIndex extends React.Component {
  componentDidMount(){
    document.title = "Stream"
    this.props.startLoading();
    this.props.fetchSongsFromStream().then(() => this.props.stopLoading());
  }
  render(){
    const {songs, filteredSongIds, loading} = this.props;

    if (loading) {return(
      <div class="loading-spinner">
        <div class="la-ball-clip-rotate la-dark la-3x">
          <div></div>
        </div>
      </div>
    )}

    if (!filteredSongIds) {return null}

    let songsList = [];
    filteredSongIds.forEach((id)=>{
      songs[id] ? songsList.push(<SongsIndexItemContainer key={id} song={songs[id]}/>) : null
    });

    return (
      <div>
        <div className="main-info-container">
          All your favorite artists in one place.
        </div>
        {songsList}
      </div>
    )
  }
}
