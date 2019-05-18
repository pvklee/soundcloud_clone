import React from 'react'
import CommentFormContainer from '../comments_form/comment_form_container'
import CommentsIndexItem from './comments_index_item'
import {formatTime} from '../../util/time_util'
import moment from 'moment'

export default ({thisComment, comments, songId, currentUserId}) => {
  const commentsList = comments.map(comment=>{
    return (comment && comment.parent_comment_id == thisComment.id) ? <CommentsIndexItem key={comment.id} comments={comments} thisComment={comment} songId={songId} currentUserId={currentUserId}/> : null;
  })
  
  return(
    <div>
      <div>{thisComment.body} at {formatTime(thisComment.song_time)}</div>
      <div>{moment(thisComment.created_at).fromNow()}</div>
      <CommentFormContainer songId={songId} parentCommentId={thisComment.id}/>
      <div className="nested-comments">{commentsList}</div>
    </div>
  )
}