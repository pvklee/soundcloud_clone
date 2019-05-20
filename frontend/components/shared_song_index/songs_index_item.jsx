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
      time: 0
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
    if (!song) {return null};

    const deleteSong = (!!currentUser && currentUser.id == artist.id) ? (
      <button onClick={this.handleDelete}>Delete</button>
    ) : null
    const favoriteCountText = `Favorited by ${this.props.song.num_favorites}`;
    let playCountText = `Played ${this.props.song.play_count} time`;
    if (song.play_count != 1) {playCountText += 's'}

    const audioPlayerOptions = {
      barWidth: 3,
      waveColor: "white",
      progressColor: "red",
      height: 200,
      cursorWidth: 0,
      normalize: true
    }

    const buttonPlayPauseClass = this.state.playing ? 'pause-button' : 'play-button';

    const timeDisplay = (this.state.time == 0) ? null : (
      <div className="time-display">{formatTime(this.state.time)}</div>
    )

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
              options={audioPlayerOptions}
              songDetail={songDetail}
              className="audio-player-container"
            />
            {timeDisplay}
          </div>
          <button onClick={this.toggleFavorite}>{this.state.toggleFavoriteType}</button>
          <span>{favoriteCountText}</span>
          <span>{playCountText}</span>
          {deleteSong}
        </div>
      </div>
    )
  }
}

export default withRouter(SongsIndexItem)