import * as APIUtil from '../util/user_api_util'

export const RECEIVE_USER = "RECEIVE_USER"
export const RECEIVE_USERS = "RECEIVE_USERS"

const receiveUser = ({user}) => ({
  type: RECEIVE_USER,
  user
})

const receiveUsers = ({users}) => ({
  type: RECEIVE_USERS,
  users
})


//async

export const fetchUser = userId => dispatch => (
  APIUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)))
)

export const fetchUsersFromSongComments = songId => dispatch => (
  APIUtil.fetchUsersFromSongComments(songId)
    .then(users => dispatch(receiveUsers(users)))
)

export const updateUserProfilePicture = user => dispatch => (
  APIUtil.updateUserProfilePicture(user)
    .then(user=> dispatch(receiveUser(user)))
)