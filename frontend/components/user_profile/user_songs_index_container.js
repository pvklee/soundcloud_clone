import {connect} from 'react-redux'
import {selectSongsFromSongIds} from '../../reducers/selectors'
import UserSongsIndex from './user_songs_index'

const mapStateToProps = (state, {songIds}) =>{
  return {
    songs: selectSongsFromSongIds(state, songIds),
    currentUserId: state.session.currentUserId
  }
}

export default connect(
  mapStateToProps,
)(UserSongsIndex)