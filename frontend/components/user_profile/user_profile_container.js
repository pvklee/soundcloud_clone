import {connect} from 'react-redux'
import UserProfile from './user_profile'
import {fetchUser, updateUserProfilePicture} from '../../actions/user_actions'
import {fetchSongsFromUser} from '../../actions/song_actions'

const mapStateToProps = (state, {match}) => ({
  userId: match.params.userId,
  user: state.entities.users[match.params.userId],
  currentUserId: state.session.currentUserId
})

const mapDispatchToProps = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  fetchSongsFromUser: (userId) => dispatch(fetchSongsFromUser(userId)),
  updateUserProfilePicture: user => dispatch(updateUserProfilePicture(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile)