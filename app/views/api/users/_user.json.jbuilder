json.extract! user, :username, :id
json.createdSongIds user.songs.pluck(:id)
json.favoriteSongIds user.favorite_songs.pluck(:id)