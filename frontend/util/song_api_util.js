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

// export const createReview = review => (
//   $.ajax({
//     url: `api/reviews`,
//     method: 'POST',
//     data: {review},
//   })
// )