import React from 'react'
import CommentFormContainer from '../comments_form/comment_form_container'
import SongIndexItemContainer from './songs_index_item_container'
import CommentsIndexContainer from '../comments_index/comments_index_container'

class SongDetail extends React.Component {

  componentDidMount(){
    this.props.fetchSong(this.props.songId);
    this.props.fetchCommentsFromSong(this.props.songId);
  }

  render(){
    const {song, songId, currentUser} = this.props;
    if (!song) {return null};
  
    return(
      <div>
        <SongIndexItemContainer song={song}/>
        <CommentsIndexContainer songId={songId} commentIds={song.commentIds}/>
      </div>
    )
  }
}

export default SongDetail