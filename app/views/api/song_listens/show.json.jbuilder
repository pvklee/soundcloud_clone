json.listen do
  json.partial! 'song_listen', song_listen: @song_listen
end
json.songId @song_listen.song_id
json.userId @song_listen.user_id