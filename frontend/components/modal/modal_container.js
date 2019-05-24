import {connect} from 'react-redux'
import {closeModal} from '../../actions/modal_actions'
import Modal from './modal'

const mapStateToProps = state => ({
  currentModal: state.ui.modal.modalState
})

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)