import React from 'react'
import SongIndexItemContainer from './songs_index_item_container'
import CommentsIndexContainer from '../comments_index/comments_index_container'

class SongDetail extends React.Component {
  constructor(props){
    super(props);
    this.onSongArtChange = this.onSongArtChange.bind(this);
  }

  componentDidMount(){
    this.props.fetchSong(this.props.songId);
    this.props.fetchCommentsFromSong(this.props.songId);
  }

  onSongArtChange(e){
    const file = e.currentTarget.files[0];
    const formData = new FormData();
    if (file) {
      formData.append('artFile', file);
    }
    this.props.updateSongArt({
      formData: formData,
      songId: this.props.song.id
    })
  }
  
  render(){
    const {song, songId, currentUser} = this.props;
    if (!song) {return null};
  
    const changeSongArtButton = (!!currentUser && song.artist_id == currentUser.id) ? (
      <input
        type="file"
        onChange={this.onSongArtChange}
      />
    ) : null
  

    return(
      <div>
        {changeSongArtButton}
        <SongIndexItemContainer song={song} songDetail={true}/>
        <CommentsIndexContainer songId={songId} commentIds={song.commentIds}/>
      </div>
    )
  }
}

export default SongDetail