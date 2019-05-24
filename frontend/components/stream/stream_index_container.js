import {connect} from 'react-redux'
import {fetchSongsFromStream} from '../../actions/song_actions'
import {selectAllSongs} from '../../reducers/selectors'
import StreamIndex from './stream_index'

const mapStateToProps = state => ({
  songs: state.entities.songs,
  filteredSongIds: state.ui.filteredSongIds
})

const mapDispatchToProps = dispatch => ({
  fetchSongsFromStream: () => dispatch(fetchSongsFromStream())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamIndex)