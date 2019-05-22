import {connect} from 'react-redux'
import FavoritesIndex from './favorites_index'

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUserId],
  songs: state.entities.songs,
  users: state.entities.users,
  favoriteSongIds: state.entities.users[state.session.currentUserId].favoriteSongIds
})

export default connect(
  mapStateToProps
)(FavoritesIndex)