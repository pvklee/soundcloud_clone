import {connect} from 'react-redux'
import HistoryIndex from './history_index'
import {selectListensFromListenIds} from '../../reducers/selectors'
import {fetchListenedSongsOfUser} from '../../actions/song_actions'
import {startLoading, stopLoading} from '../../actions/loading_actions'

const mapStateToProps = state => {
  const currentUser = state.entities.users[state.session.currentUserId];
  return({
    currentUserId: currentUser.id,
    songs: state.entities.songs,
    users: state.entities.users,
    listens: selectListensFromListenIds(state, currentUser.listenIds),
    loading: state.ui.loading.loading
  })
}
const mapDispatchToProps = dispatch => ({
  fetchListenedSongsOfUser: userId => dispatch(fetchListenedSongsOfUser(userId)),
  startLoading: () => dispatch(startLoading()),
  stopLoading: () => dispatch(stopLoading())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryIndex)