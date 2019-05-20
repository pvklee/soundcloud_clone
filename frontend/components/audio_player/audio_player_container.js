import {connect} from 'react-redux'
import {markPlayForSong} from '../../actions/song_actions'
import AudioPlayer from './audio_player'

const mapDispatchToProps = dispatch => ({
  markPlayForSong: songId => dispatch(markPlayForSong(songId))
})

export default connect(
  null,
  mapDispatchToProps
)(AudioPlayer)