import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {deleteSong, favoriteSong, unfavoriteSong} from '../../actions/song_actions'

class SongsIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      toggleFavoriteType: 'Favorite'
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
    this.setToggleFavoriteTypeState = this.setToggleFavoriteTypeState.bind(this);
  }

  componentDidMount(){
    this.setToggleFavoriteTypeState();
  }

  setToggleFavoriteTypeState(){
    const {currentUser, song} = this.props;
    const favoriteType = (currentUser.favoriteSongIds.includes(song.id)) ? (
        'Unfavorite'
      ) : (
        'Favorite'
      )
    this.setState({toggleFavoriteType: favoriteType});
  }

  handleDelete(){
    this.props.deleteSong(this.props.song.id);
  }

  toggleFavorite(){
    const {song, currentUser, favoriteSong, unfavoriteSong} = this.props;
    this.state.toggleFavoriteType == 'Favorite' ? (
        favoriteSong(song.id, currentUser.id).then(()=>this.setState({toggleFavoriteType: 'Unfavorite'}))
      ) : (
        unfavoriteSong(song.id, currentUser.id).then(()=>this.setState({toggleFavoriteType: 'Favorite'}))
      )
  }

  render(){
    const {song, artist, currentUser} = this.props;
    const deleteSong = (currentUser.id == artist.id) ? (
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
          <button onClick={this.toggleFavorite}>{this.state.toggleFavoriteType}</button>
          {deleteSong}
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state, {song}) => ({
  artist: state.entities.users[song.artist_id],
  currentUser: state.entities.users[state.session.currentUserId],
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