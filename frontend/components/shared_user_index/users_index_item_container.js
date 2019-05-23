import {connect} from 'react-redux'
import UsersIndexItem from './users_index_item'
import {followUser, unfollowUser} from '../../actions/user_actions'

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.currentUserId],
})

const mapDispatchToProps = dispatch => ({
  followUser: userId => dispatch(followUser(userId)),
  unfollowUser: userId => dispatch(unfollowUser(userId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersIndexItem)