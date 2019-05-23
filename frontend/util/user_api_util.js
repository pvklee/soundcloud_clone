export const fetchUser = (userId) => {
  return $.ajax({
    url: `api/users/${userId}`,
    method: 'GET',
  })
}

export const fetchUsersFromSongComments = (songId) => {
  return $.ajax({
    url: `api/users`,
    method: 'GET',
    data: {songId}
  })
}

export const updateUserProfilePicture = ({formData, userId}) => (
  $.ajax({
    url: `api/users/${userId}`,
    method: 'PATCH',
    data: formData,
    contentType: false,
    processData: false
  })
)

export const followUser = (followingId) => (
  $.ajax({
    url: `api/users/${followingId}/follow`,
    method: 'POST'
  })
)

export const unfollowUser = (followingId) => (
  $.ajax({
    url: `api/users/${followingId}/unfollow`,
    method: 'POST'
  })
)