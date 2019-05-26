import {connect} from 'react-redux'
import {fetchSongsFromStream} from '../../actions/song_actions'
import {selectSongsFromSongIds} from '../../reducers/selectors'
import {startLoading, stopLoading} from '../../actions/loading_actions'
import StreamIndex from './stream_index'

const mapStateToProps = state => ({
  songs: state.entities.songs,
  streamSongIds: state.ui.filters.streamSongIds,
  streamSongs: selectSongsFromSongIds(state, state.ui.filters.streamSongIds),
  loading: state.ui.loading.loading
})

const mapDispatchToProps = dispatch => ({
  fetchSongsFromStream: () => dispatch(fetchSongsFromStream()),
  startLoading: () => dispatch(startLoading()),
  stopLoading: () => dispatch(stopLoading())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamIndex)