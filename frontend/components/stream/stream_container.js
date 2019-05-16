import {connect} from 'react-redux'
import {fetchSongs} from '../../actions/song_actions'
import {selectAllSongs} from '../../reducers/selectors'
import Stream from './stream'

const mapStateToProps = state => ({
  songs: selectAllSongs(state)
})

export default connect(
  mapStateToProps,
)(Stream)