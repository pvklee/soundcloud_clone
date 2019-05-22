import {connect} from 'react-redux'
import {markPlayForSong} from '../../actions/song_actions'
import {createListen} from '../../actions/listen_actions'
import AudioPlayer from './audio_player'

const mapDispatchToProps = dispatch => ({
  markPlayForSong: songId => dispatch(markPlayForSong(songId)),
  createListen: listen => dispatch(createListen(listen))
})

export default connect(
  null,
  mapDispatchToProps
)(AudioPlayer)