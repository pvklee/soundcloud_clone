json.extract! user, :username, :id
json.createdSongIds user.created_songs.pluck(:id)
json.favoriteSongIds user.favorite_songs.pluck(:id)
json.listenIds user.song_listens.pluck(:id)
json.usersFollowedIds user.users_followed.pluck(:id)
json.followerIds user.followers.pluck(:id)

if user.profilePictureFile.attached?
  json.profilePictureUrl url_for(user.profilePictureFile)
end