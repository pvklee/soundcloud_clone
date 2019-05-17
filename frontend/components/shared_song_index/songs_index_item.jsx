import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import {Link, withRouter} from 'react-router-dom'

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
    const {song, currentUser, favoriteSong, unfavoriteSong} = this.props;
    if(!currentUser){
      this.props.history.push('/login');
      return;
    }

    this.state.toggleFavoriteType == 'Favorite' ? (
        favoriteSong(song.id, currentUser.id).then(()=>this.setState({toggleFavoriteType: 'Unfavorite'}))
      ) : (
        unfavoriteSong(song.id, currentUser.id).then(()=>this.setState({toggleFavoriteType: 'Favorite'}))
      )
  }

  render(){
    const {song, artist, currentUser} = this.props;
    const deleteSong = (!!currentUser && currentUser.id == artist.id) ? (
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

export default withRouter(SongsIndexItem)