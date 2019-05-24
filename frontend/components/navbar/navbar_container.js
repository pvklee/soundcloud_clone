import {connect} from 'react-redux'
import {logout} from '../../actions/session_actions'
import {openLoginFormModal, openSignupFormModal} from '../../actions/modal_actions'
import Navbar from './navbar'

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUserId]
})

const mapDispatchToProps = dispatch => ({
  openLoginFormModal: () => dispatch(openLoginFormModal()),
  openSignupFormModal: () => dispatch(openSignupFormModal()),
  logout: () => dispatch(logout())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)