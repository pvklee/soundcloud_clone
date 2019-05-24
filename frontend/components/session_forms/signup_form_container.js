import SessionForm from './session_form'
import {connect} from 'react-redux'
import {signup} from '../../actions/session_actions'
import {selectAllSessionErrors} from '../../reducers/selectors'

const mapStateToProps = state => ({
  errors: selectAllSessionErrors(state),
  formType: 'signup'
})

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
  closeModal: () => dispatch(closeModal())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm)