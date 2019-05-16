import React from 'react'
import StreamSongsIndexItem from './stream_songs_index_item'

export default class SongsIndex extends React.Component {
  componentDidMount(){
    this.props.fetchSongs();
  }

  render(){
    const {songs} = this.props;
    const songsList = songs.map(song=>(
      <StreamSongsIndexItem key={song.id} song={song}/>
    ))

    return (
      <div>
        {songsList}
      </div>
    )
  }
}
