import {connect} from 'react-redux'
import {setCurrentSongTime} from '../../actions/ui_actions'
import AudioPlayer from './audio_player'

const mapDispatchToProps = dispatch => ({
  setCurrentSongTime: time => dispatch(setCurrentSongTime(time))
})

export default connect(
  null,
  mapDispatchToProps
)(AudioPlayer)