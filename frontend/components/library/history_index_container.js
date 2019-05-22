import {connect} from 'react-redux'
import HistoryIndex from './history_index'
import {selectListensFromListenIds} from '../../reducers/selectors'

const mapStateToProps = state => {
  const currentUser = state.entities.users[state.session.currentUserId];
  return({
    currentUser: currentUser,
    songs: state.entities.songs,
    users: state.entities.users,
    listens: selectListensFromListenIds(state, currentUser.listenIds)
  })
}

export default connect(
  mapStateToProps
)(HistoryIndex)