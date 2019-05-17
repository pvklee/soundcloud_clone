import React from 'react'
import SongsIndexItemContainer from '../shared_song_index/songs_index_item_container'

export default class SongsIndex extends React.Component {
  componentDidMount(){
    this.props.fetchSongs();
  }

  render(){
    const {songs} = this.props;
    const songsList = songs.map(song=>(
      <SongsIndexItemContainer key={song.id} song={song}/>
    ))

    return (
      <div>
        {songsList}
      </div>
    )
  }
}
