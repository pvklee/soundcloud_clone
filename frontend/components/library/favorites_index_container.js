import {connect} from 'react-redux'
import FavoritesIndex from './favorites_index'
import {selectSongsFromSongIds} from '../../reducers/selectors'

const mapStateToProps = state => {
  const currentUser = state.entities.users[state.session.currentUserId]
  return {
    currentUser: currentUser,
    songs: state.entities.songs,
    users: state.entities.users,
    favoriteSongs: selectSongsFromSongIds(state, currentUser.favoriteSongIds)
  }
}

export default connect(
  mapStateToProps
)(FavoritesIndex)