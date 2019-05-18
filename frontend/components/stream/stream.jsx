import React from 'react'
import StreamSongsIndexContainer from './stream_songs_index_container'

export default class Stream extends React.Component {
  componentDidMount(){
    this.props.fetchSongs();
  }
  
  render(){
    return (
      <div>
        <StreamSongsIndexContainer />
      </div>
    )
  }
}