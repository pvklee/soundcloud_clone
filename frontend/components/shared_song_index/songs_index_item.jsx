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
  }

  componentDidMount(){
    this.setToggleFavoriteTypeState();
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

  render(){
    const {song, artist, currentUser} = this.props;
    const deleteSong = (!!currentUser && currentUser.id == artist.id) ? (
      <button onClick={this.handleDelete}>Delete</button>
    ) : ''
    const favoriteCountText = `Favorited by ${this.state.numFavorites}`
  
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