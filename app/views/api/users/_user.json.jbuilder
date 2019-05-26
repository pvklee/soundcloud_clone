json.extract! user, :username, :id
json.createdSongIds user.created_songs.order(title: :asc).pluck(:id)
json.favoriteSongIds user.favorite_songs.order(title: :asc).pluck(:id)
json.listenIds user.song_listens.order(id: :asc).pluck(:id)
json.usersFollowedIds user.users_followed.order(username: :asc).pluck(:id)
json.followerIds user.followers.order(username: :asc).pluck(:id)

if user.profilePictureFile.attached?
  json.profilePictureUrl url_for(user.profilePictureFile)
end