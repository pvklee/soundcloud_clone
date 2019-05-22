export const fetchSongs = (filters) => {
  return $.ajax({
    url: 'api/songs',
    method: 'GET',
    data: filters,
  })
}

export const fetchSong = (id) => {
  return $.ajax({
    url: `api/songs/${id}`,
    method: 'GET',
  })
}

export const fetchSongsFromUser = userId => (
  $.ajax({
    url: 'api/songs',
    method: 'GET',
    data: {userId},
  })
)

export const createSong = song => (
  $.ajax({
    url: 'api/songs',
    method: 'POST',
    data: song,
    contentType: false,
    processData: false
  })
)

export const deleteSong = songId => (
  $.ajax({
    url: `api/songs/${songId}`,
    method: 'DELETE',
  })
)

export const favoriteSong = (songId, userId) => {
  return $.ajax({
    url: `api/songs/${songId}/favorite`,
    method: 'POST',
    data: {userId}
  })
}

export const unfavoriteSong = (songId, userId) => {
  return $.ajax({
    url: `api/songs/${songId}/unfavorite`,
    method: 'POST',
    data: {userId}
  })
}

export const updateSongArt = ({formData, songId}) => (
  $.ajax({
    url: `api/songs/${songId}`,
    method: 'PATCH',
    data: formData,
    contentType: false,
    processData: false
  })
)

export const markPlayForSong = songId => (
  $.ajax({
    url: `api/songs/${songId}`,
    method: 'PATCH',
    data: {markPlay: true}
  })
)

export const fetchFavoriteSongsOfUser = favoriteSongsFromUserId => {
  return $.ajax({
    url: 'api/songs',
    method: 'GET',
    data: {favoriteSongsFromUserId}
  })
}