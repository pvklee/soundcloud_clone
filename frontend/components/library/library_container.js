import {connect} from 'react-redux'
import Library from './library'

const mapStateToProps = state => ({
  currentUserId: state.session.currentUserId,
  currentUser: state.entities.users[state.session.currentUserId],
  songs: state.entities.songs,
  users: state.entities.users
})

export default connect(
  mapStateToProps
)(Library)