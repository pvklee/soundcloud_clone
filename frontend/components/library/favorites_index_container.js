import {connect} from 'react-redux'
import FavoritesIndex from './favorites_index'
import {selectSongsFromSongIds} from '../../reducers/selectors'
import {startLoading, stopLoading} from '../../actions/loading_actions'
import {fetchFavoriteSongsOfUser} from '../../actions/song_actions'

const mapStateToProps = state => {
  const currentUser = state.entities.users[state.session.currentUserId]
  return {
    currentUserId: state.session.currentUserId,
    songs: state.entities.songs,
    users: state.entities.users,
    favoriteSongs: selectSongsFromSongIds(state, currentUser.favoriteSongIds),
    loading: state.ui.loading.loading
  }
}

const mapDispatchToProps = dispatch => ({
  startLoading: () => dispatch(startLoading()),
  stopLoading: () => dispatch(stopLoading()),
  fetchFavoriteSongsOfUser: userId => dispatch(fetchFavoriteSongsOfUser(userId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesIndex)