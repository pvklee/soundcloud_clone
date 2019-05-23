import React from 'react'
import SongsIndexItemContainer from '../shared_song_index/songs_index_item_container'

export default class StreamIndex extends React.Component {
  componentDidMount(){
    this.props.fetchSongs();
  }
  render(){
    const {songs, filteredSongIds} = this.props;
    if (!filteredSongIds) {return (
      <div class="la-ball-clip-rotate la-dark">
        <div></div>
      </div>
    )};
    let songsList = [];
    filteredSongIds.forEach((id)=>{
      songs[id] ? songsList.push(<SongsIndexItemContainer key={id} song={songs[id]}/>) : null
    });

    return (
      <div>
        {songsList}
      </div>
    )
  }
}
