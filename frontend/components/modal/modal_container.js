import {connect} from 'react-redux'
import Modal from './modal'

const mapStateToProps = state => ({
  currentModal: state.ui.modalState
})

export default connect(
  mapStateToProps
)(Modal)