export const selectAllSessionErrors = state => (
  Object.values(state.errors.session)
)

export const selectAllSongs = state => (
  Object.values(state.entities.songs)
)

export const selectSongsFromSongIds = (state, songIds) => {
  return songIds.map(id => state.entities.songs[id]).reverse();
}

export const selectCommentsFromCommentIds = (state, commentIds) => {
  return commentIds.map(id => state.entities.comments[id]).reverse();
}

export const selectListensFromListenIds = (state, listenIds) => {
  return listenIds.map(id => state.entities.listens[id]).reverse();
}

export const selectFollowedUsersFromUser = (state, usersFollowing) => {
  if (!usersFollowing) return [];
  const followingIds = Object.keys(usersFollowing);
  return followingIds.map(id => state.entities.users[id]);
}