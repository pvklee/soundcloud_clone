json.extract! song, :id, :title, :artist_id, :genre, :num_favorites
json.songUrl url_for(song.songFile)
if song.artFile.attached?
  json.artUrl url_for(song.artFile)
end