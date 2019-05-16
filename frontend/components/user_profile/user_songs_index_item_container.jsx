import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {deleteSong} from '../../actions/song_actions'

class UserSongsIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(){
    this.props.deleteSong(this.props.song.id);
  }

  render(){
    const {song, artist, currentUserId} = this.props;
    const deleteSong = (currentUserId == artist.id) ? (
      <button onClick={this.handleDelete}>Delete Song</button>
    ) : ''
  
    return(
      <div>
        <div>
          <Link to={`/users/${artist.id}`}>{artist.username}</Link><br/>
          {song.title}
  
        </div>
        <ReactAudioPlayer
          src={song.songUrl}
          controls
        />
        {deleteSong}
      </div>
    )
  }
}


const mapStateToProps = (state, {song, currentUserId}) => ({
  artist: state.entities.users[song.artist_id],
  currentUserId: currentUserId
})

const mapDispatchToProps = dispatch => ({
  deleteSong: (id) => dispatch(deleteSong(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSongsIndexItem)