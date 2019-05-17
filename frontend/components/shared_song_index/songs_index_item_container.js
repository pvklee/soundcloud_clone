import {connect} from 'react-redux'
import {deleteSong, favoriteSong, unfavoriteSong} from '../../actions/song_actions'
import SongsIndexItem from './songs_index_item'

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