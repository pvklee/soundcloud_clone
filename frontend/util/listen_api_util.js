export const createListen = listen => (
  $.ajax({
    url: 'api/song_listens/',
    method: 'POST',
    data: {listen}
  })
)