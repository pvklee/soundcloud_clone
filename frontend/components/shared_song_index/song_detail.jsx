import React from 'react'
import SongIndexItemContainer from './songs_index_item_container'
import CommentsIndexContainer from '../comments_index/comments_index_container'

class SongDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchSong(this.props.songId)
      .then(() => {
        document.title = this.props.song.title;
      })
    this.props.fetchCommentsFromSong(this.props.songId);
  }

  componentDidUpdate(prevProps){
    if(prevProps.songId !== this.props.songId){
      this.props.fetchSong(this.props.songId)
      .then(() => {
        document.title = this.props.song.title;
      })
      this.props.fetchCommentsFromSong(this.props.songId);
    }
  }
  
  render(){
    const {song, songId, currentUser} = this.props;
    if (!song) {return null};

    return(
      <div>
        <SongIndexItemContainer song={song} songDetail={true}/>
        <CommentsIndexContainer songId={songId} commentIds={song.commentIds}/>
      </div>
    )
  }
}

export default SongDetail