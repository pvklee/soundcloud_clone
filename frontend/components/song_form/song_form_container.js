import {connect} from 'react-redux'
import {createSong} from '../../actions/song_actions'
import SongForm from './song_form'

const mapStateToProps = (state) => ({
  artistId: state.session.currentUserId,
  genres: state.ui.filters.genres
})

const mapDispatchToProps = dispatch => ({
  createSong: song => dispatch(createSong(song))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongForm)