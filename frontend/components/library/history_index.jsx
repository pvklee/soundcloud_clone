import React from 'react'
import SongsIndexItemContainer from '../shared_song_index/songs_index_item_container'

export default class HistoryIndex extends React.Component{
  render(){
    const {songs, listens} = this.props;
    if (!listens) {return null};

    const alreadyCountedSongs = {};
    const listenedSongsList = listens.map(listen => {
      if(listen && songs[listen.song_id] && !alreadyCountedSongs[listen.song_id]){
        alreadyCountedSongs[listen.song_id] = true;
        return <SongsIndexItemContainer song={songs[listen.song_id]} key={`listen`+listen.id} />
      }
      return null;
    })
    return(
      <div>{listenedSongsList}</div>
    )
  }
}