json.extract! user, :username, :id
json.createdSongIds user.createdSongIdsByFavoritesCount
json.favoriteSongIds user.favorite_songs.pluck(:id)