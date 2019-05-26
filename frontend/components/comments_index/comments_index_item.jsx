import React from 'react'
import CommentFormContainer from '../comments_form/comment_form_container'
import CommentsIndexItem from './comments_index_item'
import {Link} from 'react-router-dom'
import {formatTime} from '../../util/time_util'
import moment from 'moment'

export default ({thisComment, comments, songId, currentUserId, users}) => {
  const commentsList = comments.map(comment=>{
    return (comment && comment.parent_comment_id == thisComment.id) ? <CommentsIndexItem key={comment.id} comments={comments} thisComment={comment} songId={songId} currentUserId={currentUserId} users={users}/> : null;
  })

  if (!users[thisComment.user_id]) {return null};

  const username = users[thisComment.user_id].username;
  const profilePictureUrl = users[thisComment.user_id].profilePictureUrl;
  const profilePicture = <img src={profilePictureUrl} className="user-profile-picture-comment" />

  return(
    <div>
      <div className="comment">
        <div className="comment-picture-username-body">
          <div className="comment-picture">
            <Link to={`/users/${thisComment.user_id}`}>
              {profilePicture}
            </Link>
          </div>
          <div className="comment-username-body">
            <div className="comment-username">
              <div>
                <Link to={`/users/${thisComment.user_id}`} className="comment-username-link">
                    {username} 
                </Link>
                at {formatTime(thisComment.song_time)}
              </div>
              <div>{moment(thisComment.created_at).fromNow()}</div>
            </div>
            
            <div>{thisComment.body}</div>
          </div>
        </div>
      </div>
      <div className="comment-form-container">
        <CommentFormContainer songId={songId} parentCommentId={thisComment.id}/>
      </div>
      <div className="nested-comments">{commentsList}</div>
    </div>
  )
}