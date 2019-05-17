import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {deleteSong, favoriteSong, unfavoriteSong} from '../../actions/song_actions'

class SongsIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  handleDelete(){
    this.props.deleteSong(this.props.song.id);
  }

  toggleFavorite(){
    const {song, currentUserId, unfavoriteSong} = this.props;
    unfavoriteSong(song.id, currentUserId);
  }

  render(){
    const {song, artist, currentUserId} = this.props;
    const deleteSong = (currentUserId == artist.id) ? (
      <button onClick={this.handleDelete}>Delete</button>
    ) : ''

  
    return(
      <div>
        <div>
          <img src={song.artUrl}/>
        </div>
        <div>
          <div>
            <Link to={`/users/${artist.id}`}>{artist.username}</Link><br/>
            {song.title}
    
          </div>
          <ReactAudioPlayer
            src={song.songUrl}
            controls
          />
          <button onClick={this.toggleFavorite}>Unfavorite</button>
          {deleteSong}
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state, {song}) => ({
  artist: state.entities.users[song.artist_id],
  currentUserId: state.session.currentUserId
})

const mapDispatchToProps = dispatch => ({
  deleteSong: (id) => dispatch(deleteSong(id)),
  favoriteSong: (songId, userId) => dispatch(favoriteSong(songId, userId)),
  unfavoriteSong: (songId, userId) => dispatch(unfavoriteSong(songId, userId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongsIndexItem)