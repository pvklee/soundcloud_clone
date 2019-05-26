json.extract! song, :id, :title, :artist_id, :genre, :num_favorites, :play_count
if song.songFile.attached?
  json.songUrl url_for(song.songFile)
end
if song.artFile.attached?
  json.artUrl url_for(song.artFile)
end