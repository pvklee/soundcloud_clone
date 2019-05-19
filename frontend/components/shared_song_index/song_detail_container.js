import {connect} from 'react-redux'
import {fetchSong, updateSongArt} from '../../actions/song_actions'
import {fetchCommentsFromSong} from '../../actions/comment_actions'
import SongDetail from './song_detail'

const mapStateToProps = (state, {match}) => ({
  songId: match.params.songId,
  song: state.entities.songs[match.params.songId],
  currentUser: state.entities.users[state.session.currentUserId]
})


const mapDispatchToProps = dispatch => ({
  fetchSong: (songId) => dispatch(fetchSong(songId)),
  fetchCommentsFromSong: (commentId) => dispatch(fetchCommentsFromSong(commentId)),
  updateSongArt: song => dispatch(updateSongArt(song))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongDetail)