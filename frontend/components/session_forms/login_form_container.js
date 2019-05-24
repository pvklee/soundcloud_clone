import SessionForm from './session_form'
import {connect} from 'react-redux'
import {login} from '../../actions/session_actions'
import {selectAllSessionErrors} from '../../reducers/selectors'
import {closeModal} from '../../actions/modal_actions'

const mapStateToProps = state => ({
  errors: selectAllSessionErrors(state),
  formType: 'login'
})

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  closeModal: () => dispatch(closeModal())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm)