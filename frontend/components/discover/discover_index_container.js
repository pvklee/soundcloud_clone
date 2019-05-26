import {connect} from 'react-redux'
import {fetchSongs} from '../../actions/song_actions'
import {startLoading, stopLoading} from '../../actions/loading_actions'
import {selectSongsFromSongIds} from '../../reducers/selectors'
import DiscoverIndex from './discover_index'

const mapStateToProps = state => {
  return({
    songs: state.entities.songs,
    discoverSongIds: state.ui.filters.discoverSongIds,
    discoverSongs: selectSongsFromSongIds(state, state.ui.filters.discoverSongIds),
    loading: state.ui.loading.loading
  })
}

const mapDispatchToProps = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs()),
  startLoading: () => dispatch(startLoading()),
  stopLoading: () => dispatch(stopLoading())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoverIndex)