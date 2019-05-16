export const selectAllSessionErrors = state => (
  Object.values(state.errors.session)
)

export const selectAllSongs = state => (
  Object.values(state.entities.songs)
)

export const selectSongsFromSongIds = (state, songIds) => {
  return songIds.map(id => state.entities.songs[id])
}