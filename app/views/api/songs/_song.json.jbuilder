json.extract! song, :id, :title, :artist_id, :genre
json.songUrl url_for(song.songFile)
if song.artFile.attached?
  json.artUrl url_for(song.artFile)
end