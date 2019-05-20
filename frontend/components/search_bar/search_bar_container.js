import {connect} from 'react-redux'
import SearchBar from './search_bar'
// import {fetchUserSearchIds} from '../../actions/user_actions'
import {fetchSongSearchIds} from '../../actions/song_actions'


const mapStateToProps = state => ({
  userSearchIds: state.ui.userSearchIds,
  songSearchIds: state.ui.songSearchIds,
  songs: state.entities.songs
})

const mapDispatchToProps = dispatch => ({
  // fetchUserSearchIds: query => dispatch(fetchUserSearchIds(query)),
  fetchSongSearchIds: query => dispatch(fetchSongSearchIds(query))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)