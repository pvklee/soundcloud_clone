export const selectAllSessionErrors = state => (
  Object.values(state.errors.session)
)

export const selectAllSongs = state => (
  Object.values(state.entities.songs)
)

export const selectSongsFromSongIds = (state, songIds) => {
  if (!songIds) return [];
  return songIds.map(id => state.entities.songs[id]);
}

export const selectCommentsFromCommentIds = (state, commentIds) => {
  return commentIds.map(id => state.entities.comments[id]).reverse();
}

export const selectListensFromListenIds = (state, listenIds) => {
  return listenIds.map(id => state.entities.listens[id]).reverse();
}

export const selectUsersFromUserIds = (state, userIds) => {
  if (!userIds) return [];
  return userIds.map(id => state.entities.users[id]);
}