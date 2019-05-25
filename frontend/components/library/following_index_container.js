import {connect} from 'react-redux'
import FollowingIndex from './following_index'
import {selectUsersFromUserIds} from '../../reducers/selectors'

const mapStateToProps = state => {
  const currentUser = state.entities.users[state.session.currentUserId];
  return({
    currentUser: currentUser,
    users: state.entities.users,
    following: selectUsersFromUserIds(state, currentUser.usersFollowedIds)
  })
}

export default connect(
  mapStateToProps
)(FollowingIndex)