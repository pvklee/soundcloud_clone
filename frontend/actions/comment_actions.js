import * as APIUtil from '../util/comment_api_util'

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS"
export const RECEIVE_COMMENT = "RECEIVE_COMMENT"

const receiveComments = ({comments}) => ({
  type: RECEIVE_COMMENTS,
  comments
})

const receiveComment = ({comment, userId, songId}) => ({
  type: RECEIVE_COMMENT,
  comment,
  userId,
  songId
})

//async

export const createComment = comment => dispatch => (
  APIUtil.createComment(comment)
    .then(comment => dispatch(receiveComment(comment)))
)

export const fetchCommentsFromSong = songId => dispatch => (
  APIUtil.fetchCommentsFromSong(songId)
    .then(comments => dispatch(receiveComments(comments)))
)