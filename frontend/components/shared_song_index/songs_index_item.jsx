import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import {Link, withRouter} from 'react-router-dom'

class SongsIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      toggleFavoriteType: 'Favorite',
      numFavorites: this.props.song.num_favorites
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
    this.setToggleFavoriteTypeState = this.setToggleFavoriteTypeState.bind(this);
    this.setSongFavorite = this.setSongFavorite.bind(this);
    this.setSongUnfavorite = this.setSongUnfavorite.bind(this);
    this.getSongTimeListen = this.getSongTimeListen.bind(this);
    this.getSongTimePauseSeek = this.getSongTimePauseSeek.bind(this);
  }

  componentDidMount(){
    this.setToggleFavoriteTypeState();
    this.props.setCurrentSongTime(0);
  }

  setToggleFavoriteTypeState(){
    const {currentUser, song} = this.props;
    if (!currentUser) return;
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
    const {currentUser} = this.props;
    if(!currentUser){
      this.props.history.push('/login');
      return;
    }
    this.state.toggleFavoriteType == 'Favorite' ? this.setSongFavorite() : this.setSongUnfavorite();
  }

  setSongFavorite(){
    const {song, currentUser, favoriteSong} = this.props;
    favoriteSong(song.id, currentUser.id).then(()=>{
      const newNumFavorites = this.state.numFavorites + 1;
      this.setState({toggleFavoriteType: 'Unfavorite', numFavorites: newNumFavorites});
    })
  }

  setSongUnfavorite(){
    const {song, currentUser, unfavoriteSong} = this.props;
    unfavoriteSong(song.id, currentUser.id).then(()=>{
      const newNumFavorites = this.state.numFavorites - 1;
      this.setState({toggleFavoriteType: 'Favorite', numFavorites: newNumFavorites});
    })
  }

  getSongTimeListen(e){
    this.props.setCurrentSongTime(e);
  }

  getSongTimePauseSeek(e){
    this.props.setCurrentSongTime(e.target.currentTime);
  }

  render(){
    const {song, artist, currentUser} = this.props;
    const deleteSong = (!!currentUser && currentUser.id == artist.id) ? (
      <button onClick={this.handleDelete}>Delete</button>
    ) : null
    const favoriteCountText = `Favorited by ${this.state.numFavorites}`

    return(
      <div>
        <div>
          <img src={song.artUrl} className="song-art-index"/>
        </div>
        <div>
          <div>
            <Link to={`/users/${artist.id}`}>{artist.username}</Link><br/>
            <Link to={`/songs/${song.id}`}>{song.title}</Link>
    
          </div>
          <ReactAudioPlayer
            src={song.songUrl}
            controls
            listenInterval={1000}
            onListen={this.getSongTimeListen}
            onPause={this.getSongTimePauseSeek}
            onSeeked={this.getSongTimePauseSeek}
          /><br/>
          <button onClick={this.toggleFavorite}>{this.state.toggleFavoriteType}</button>
          <span>{favoriteCountText}</span>
          {deleteSong}
        </div>
      </div>
    )
  }
}

export default withRouter(SongsIndexItem)