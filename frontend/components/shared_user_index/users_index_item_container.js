import {connect} from 'react-redux'
import UsersIndexItem from './users_index_item'

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.currentUserId],
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersIndexItem)