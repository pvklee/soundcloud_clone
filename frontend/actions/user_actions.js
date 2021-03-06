import * as APIUtil from '../util/user_api_util'

export const RECEIVE_USER = "RECEIVE_USER"
export const RECEIVE_USERS = "RECEIVE_USERS"
export const UPDATE_FOLLOWS = "UPDATE_FOLLOWS"

const receiveUser = ({user}) => ({
  type: RECEIVE_USER,
  user
})

const receiveUsers = ({users}) => ({
  type: RECEIVE_USERS,
  users
})

const updateFollows = ({user}) => ({
  type: UPDATE_FOLLOWS,
  user
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

export const fetchUsersFromUserIds = userIds => dispatch => (
  APIUtil.fetchUsersFromUserIds(userIds)
    .then(users=>dispatch(receiveUsers(users)))
)

export const updateUserProfilePicture = user => dispatch => (
  APIUtil.updateUserProfilePicture(user)
    .then(user=> dispatch(receiveUser(user)))
)

export const followUser = userId => dispatch => (
  APIUtil.followUser(userId)
    .then(user => dispatch(updateFollows(user)))
)

export const unfollowUser = userId => dispatch => (
  APIUtil.unfollowUser(userId)
    .then(user => dispatch(updateFollows(user)))
)