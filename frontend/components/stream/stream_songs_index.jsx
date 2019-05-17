import React from 'react'
import SongsIndexItemContainer from '../shared_song_index/songs_index_item_container'

export default class SongsIndex extends React.Component {


  render(){
    const {songs, filteredSongIds} = this.props;
    if (!filteredSongIds) {return null};
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
