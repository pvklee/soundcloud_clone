import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import AudioPlayerContainer from '../audio_player/audio_player_container'
import {formatTime} from '../../util/time_util'

class SongsIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      toggleFavoriteType: 'Favorite',
      numFavorites: this.props.song.num_favorites,
      playing: false,
      time: 0,
    }
    this.handleDelete = this.handleDelete.bind(this);

    this.toggleFavorite = this.toggleFavorite.bind(this);
    this.setToggleFavoriteTypeState = this.setToggleFavoriteTypeState.bind(this);
    this.setSongFavorite = this.setSongFavorite.bind(this);
    this.setSongUnfavorite = this.setSongUnfavorite.bind(this);

    this.handleTogglePlay = this.handleTogglePlay.bind(this);
    this.handlePosChange = this.handlePosChange.bind(this);
  }

  componentDidMount(){
    this.setToggleFavoriteTypeState();
    if (this.props.songDetail) this.props.setCurrentSongTime(0);
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
    favoriteSong(song.id, currentUser.id);
    const newNumFavorites = this.state.numFavorites + 1;
    this.setState({toggleFavoriteType: 'Unfavorite', numFavorites: newNumFavorites});
  }

  setSongUnfavorite(){
    const {song, currentUser, unfavoriteSong} = this.props;
    unfavoriteSong(song.id, currentUser.id);
    const newNumFavorites = this.state.numFavorites - 1;
    this.setState({toggleFavoriteType: 'Favorite', numFavorites: newNumFavorites});
  }

  handleTogglePlay() {
    this.setState({
      playing: !this.state.playing
    });
  }

  handlePosChange(time) {
    if (this.props.songDetail && Math.floor(time) != Math.floor(this.state.time)) {this.props.setCurrentSongTime(time)}
    this.setState({
      time: time
    });
  }


  render(){
    const {song, artist, currentUser, songDetail} = this.props;
    if (!song) {return};

    const deleteSong = (!!currentUser && currentUser.id == artist.id) ? (
      <button onClick={this.handleDelete} className="song-button"><i className="fas fa-trash" /> Delete</button>
    ) : null

    const audioPlayerOptions = {
      barWidth: 3,
      waveColor: "white",
      progressColor: "blue",
      height: 200,
      cursorWidth: 0,
      normalize: true
    }

    const buttonPlayPauseClass = this.state.playing ? 'pause-button' : 'play-button';

    const timeDisplay = (this.state.time == 0) ? null : (
      <div className="time-display">{formatTime(this.state.time)}</div>
    )

    const favoriteButtonClass = this.state.toggleFavoriteType=='Unfavorite' ? 'song-button song-button-favorited' : 'song-button'

    const songArtImage = (song.artUrl) ? (
      <Link to={`/songs/${song.id}`}><img src={song.artUrl} className="song-index-item-art"/></Link>
    ) : (
      null
    )
    return(
      <div className="song-index-item">
        <div className="song-index-item-art-container">
          {songArtImage}
        </div>
        <div className="song-index-item-info-player-controls">
          <div className="song-index-username-title">
            <div className="song-index-username"><Link to={`/users/${artist.id}`} >{artist.username}</Link></div>
            <div className="song-index-title"><Link to={`/songs/${song.id}`}>{song.title}</Link></div>
          </div>
          <div className="audio-player-outer-container">
            <button className={`audio-player-play-button ${buttonPlayPauseClass}`} onClick={this.handleTogglePlay}></button>
            <AudioPlayerContainer
              audioFile={song.songUrl}
              playing={this.state.playing}
              songId={song.id}
              song={song}
              currentUser={currentUser}
              handleTogglePlay={this.handleTogglePlay}
              handlePosChange={this.handlePosChange}
              handleLoadingDone={this.handleLoadingDone}
              options={audioPlayerOptions}
              songDetail={songDetail}
              className="audio-player-container"
            />
            {timeDisplay}
          </div>
          <div className="song-index-item-controls">
            <button onClick={this.toggleFavorite} className={favoriteButtonClass}>
              <i className="fas fa-heart"/>{this.state.numFavorites}
            </button>
            <span className="song-play-count"><i className="fas fa-play"/>{song.play_count}</span>
            {deleteSong}
          </div>
        </div>
      </div>
    )

  }
}

export default withRouter(SongsIndexItem)