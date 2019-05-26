import React from 'react'
import SongsIndexItemContainer from '../shared_song_index/songs_index_item_container'

export default class HistoryIndex extends React.Component{
  componentDidMount(){
    document.title = "History";
    this.props.startLoading();
    this.props.fetchListenedSongsOfUser(this.props.currentUserId)
      .then(()=>this.props.stopLoading());
  }
  render(){
    const {songs, listens, loading} = this.props;
    if (!listens) {return null};

    if(loading){
      return(
        <div class="loading-spinner">
          <div class="la-ball-clip-rotate la-dark la-3x">
            <div></div>
          </div>
        </div>
      )
    }

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