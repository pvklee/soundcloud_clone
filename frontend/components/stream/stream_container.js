import {connect} from 'react-redux'
import {fetchSongs} from '../../actions/song_actions'
import {selectAllSongs} from '../../reducers/selectors'
import Stream from './stream'

const mapStateToProps = state => ({
  songs: selectAllSongs(state)
})

const mapDispatchToProps = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stream)