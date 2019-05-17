# json.favorite do
#   json.partial! 'favorite', favorite: @favorite
# end
json.songId @favorite.song_id
json.userId @favorite.user_id