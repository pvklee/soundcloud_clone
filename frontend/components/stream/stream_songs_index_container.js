import {connect} from 'react-redux'
import {fetchSongs} from '../../actions/song_actions'
import {selectAllSongs} from '../../reducers/selectors'
import StreamSongsIndex from './stream_songs_index'

const mapStateToProps = state => ({
  songs: state.entities.songs,
  filteredSongIds: state.ui.filteredSongIds
})

const mapDispatchToProps = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamSongsIndex)