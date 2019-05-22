json.extract! user, :username, :id
json.createdSongIds user.created_songs.pluck(:id)
json.favoriteSongIds user.favorite_songs.pluck(:id)
json.listenIds user.song_listens.pluck(:id)
if user.profilePictureFile.attached?
  json.profilePictureUrl url_for(user.profilePictureFile)
end