import React from 'react'
import CommentsIndexItem from '../comments_index/comments_index_item'
import CommentFormContainer from '../comments_form/comment_form_container'

export default class CommentsIndex extends React.Component {
  componentDidMount(){
    this.props.fetchUsersFromSongComments(this.props.songId);
  }
  
  render(){
    const {comments, currentUserId, songId, currentSongTime, users} = this.props;
    if (!comments) return null;

    const commentsList = comments.map(comment=>{
      return (comment && !comment.parent_comment_id) ? <CommentsIndexItem key={comment.id} comments={comments} thisComment={comment} songId={songId} currentUserId={currentUserId} users={users}/> : null;
    })
    
    return (
      <div>
        <CommentFormContainer songId={songId} currentSongTime={currentSongTime}/>
        {commentsList}
      </div>
    )
  }
}
