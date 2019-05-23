import {connect} from 'react-redux'
import FollowingIndex from './following_index'
import {selectFollowedUsersFromUser} from '../../reducers/selectors'

const mapStateToProps = state => {
  const currentUser = state.entities.users[state.session.currentUserId];
  return({
    currentUser: currentUser,
    users: state.entities.users,
    following: selectFollowedUsersFromUser(state, currentUser.usersFollowing)
  })
}

export default connect(
  mapStateToProps
)(FollowingIndex)