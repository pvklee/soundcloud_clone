import {connect} from 'react-redux'
import {createComment} from '../../actions/comment_actions'
import CommentForm from './comment_form'

const mapStateToProps = state => ({
  currentUserId: state.session.currentUserId,
  currentSongTime: state.ui.currentSong.currentSongTime
})

const mapDispatchToProps = dispatch => ({
  createComment: song => dispatch(createComment(song))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm)