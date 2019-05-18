export const createComment = (comment) => {
  return $.ajax({
    url: 'api/comments',
    method: 'POST',
    data: {comment},
  })
}

export const fetchCommentsFromSong = (songId) => {
  return $.ajax({
    url: 'api/comments',
    method: 'GET',
    data: {songId}
  })
}

