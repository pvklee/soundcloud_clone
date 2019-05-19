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
