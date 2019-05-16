import {connect} from 'react-redux'
import {selectSongsFromSongIds} from '../../reducers/selectors'
import UserSongsIndex from './user_songs_index'

const mapStateToProps = (state, {artist, songIds, artistId}) =>{
  return {
    songs: selectSongsFromSongIds(state, songIds),
    artistId: artistId,
    artist: artist,
    currentUserId: state.session.currentUserId
  }
}

export default connect(
  mapStateToProps,
)(UserSongsIndex)