import {connect} from 'react-redux'
import UserProfile from './user_profile'
import {fetchUser, updateUserProfilePicture, followUser, unfollowUser} from '../../actions/user_actions'
import {startLoading,stopLoading} from '../../actions/loading_actions'
import {fetchSongsFromUser} from '../../actions/song_actions'

const mapStateToProps = (state, {match}) => ({
  userId: match.params.userId,
  user: state.entities.users[match.params.userId],
  currentUser: state.entities.users[state.session.currentUserId],
  currentUserId: state.session.currentUserId
})

const mapDispatchToProps = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  fetchSongsFromUser: (userId) => dispatch(fetchSongsFromUser(userId)),
  updateUserProfilePicture: user => dispatch(updateUserProfilePicture(user)),
  followUser: userId => dispatch(followUser(userId)),
  unfollowUser: userId => dispatch(unfollowUser(userId)),
  startLoading: () => dispatch(startLoading()),
  stopLoading: () => dispatch(stopLoading()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile)