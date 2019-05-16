import {connect} from 'react-redux'
import UserProfile from './user_profile'
import {fetchUser} from '../../actions/user_actions'
import {fetchSongsFromUser} from '../../actions/song_actions'

const mapStateToProps = (state, {match}) => ({
  userId: match.params.userId,
  user: state.entities.users[match.params.userId]
})

const mapDispatchToProps = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  fetchSongsFromUser: (userId) => dispatch(fetchSongsFromUser(userId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile)