import {connect} from 'react-redux'
import FollowingIndex from './following_index'
import {selectUsersFromUserIds} from '../../reducers/selectors'
import {fetchUsersFromUserIds} from '../../actions/user_actions'
import {startLoading, stopLoading} from '../../actions/loading_actions'

const mapStateToProps = state => {
  const currentUser = state.entities.users[state.session.currentUserId];
  return({
    currentUser: currentUser,
    following: selectUsersFromUserIds(state, currentUser.usersFollowedIds),
    loading: state.ui.loading.loading
  })
}

const mapDispatchToProps = dispatch => ({
  startLoading: () => dispatch(startLoading()),
  stopLoading: () => dispatch(stopLoading()),
  fetchUsersFromUserIds: (userIds) => dispatch(fetchUsersFromUserIds(userIds))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowingIndex)