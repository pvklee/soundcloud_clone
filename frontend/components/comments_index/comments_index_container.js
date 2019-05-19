import {connect} from 'react-redux'
import {selectCommentsFromCommentIds} from '../../reducers/selectors'
import CommentsIndex from './comments_index'
import {fetchUsersFromSongComments} from '../../actions/user_actions'

const mapStateToProps = (state, {commentIds}) => {
  return({
    users: state.entities.users,
    comments: selectCommentsFromCommentIds(state, commentIds),
    currentUserId: state.session.currentUserId,
  })
}

const mapDispatchToProps = dispatch => ({
  fetchUsersFromSongComments: songId => dispatch(fetchUsersFromSongComments(songId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsIndex)