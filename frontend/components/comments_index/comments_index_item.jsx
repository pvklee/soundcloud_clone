import React from 'react'
import CommentFormContainer from '../comments_form/comment_form_container'
import CommentsIndexItem from './comments_index_item'

export default ({thisComment, comments, songId, currentUserId}) => {
  const commentsList = comments.map(comment=>{
    return (comment && comment.parent_comment_id == thisComment.id) ? <CommentsIndexItem key={comment.id} comments={comments} thisComment={comment} songId={songId} currentUserId={currentUserId}/> : null;
  })
  
  return(
    <div>
      <div>{thisComment.body}</div>
      <CommentFormContainer songId={songId} currentUserId={currentUserId} parentCommentId={thisComment.id}/>
      <div className="nested-comments">{commentsList}</div>
    </div>
  )
}