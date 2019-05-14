import SessionForm from './session_form'
import {connect} from 'react-redux'
import {login} from '../../actions/session_actions'
import {selectAllSessionErrors} from '../../reducers/selectors'

const mapStateToProps = state => ({
  errors: selectAllSessionErrors(state),
  formType: 'login'
})

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm)