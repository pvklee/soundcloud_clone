import {connect} from 'react-redux'
import {selectCommentsFromCommentIds} from '../../reducers/selectors'
import CommentsIndex from './comments_index'

const mapStateToProps = (state, {commentIds}) => {
  return({
    state: state,
    comments: selectCommentsFromCommentIds(state, commentIds),
    currentUserId: state.session.currentUserId,
  })
}
export default connect(
  mapStateToProps,
)(CommentsIndex)