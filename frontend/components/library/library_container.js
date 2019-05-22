import {connect} from 'react-redux'
import Library from './library'
import {fetchFavoriteSongsOfUser, fetchListenedSongsOfUser} from '../../actions/song_actions'

const mapStateToProps = state => ({
  currentUserId: state.session.currentUserId,
  currentUser: state.entities.users[state.session.currentUserId],
  songs: state.entities.songs,
  users: state.entities.users
})

const mapDispatchToProps = dispatch => ({
  fetchFavoriteSongsOfUser: userId => dispatch(fetchFavoriteSongsOfUser(userId)),
  fetchListenedSongsOfUser: userId => dispatch(fetchListenedSongsOfUser(userId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Library)