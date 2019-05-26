import React from 'react'
import SongsIndexItemContainer from '../shared_song_index/songs_index_item_container'

export default class DiscoverIndex extends React.Component {
  componentDidMount(){
    document.title = "Discover"
    this.props.startLoading();
    this.props.fetchSongs().then(() => this.props.stopLoading());
  }
  render(){
    const {songs, discoverSongs, loading} = this.props;
    if (loading) {return (
      <div class="loading-spinner">
        <div class="la-ball-clip-rotate la-dark la-3x">
          <div></div>
        </div>
      </div>
    )};

    if (!discoverSongs) {return null};
    let songsList = [];
    discoverSongs.forEach((song)=>{
      song ? songsList.push(<SongsIndexItemContainer key={song.title} song={song}/>) : null
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
