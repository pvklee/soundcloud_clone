json.extract! song, :id, :title, :artist_id, :genre
json.songUrl url_for(song.songFile)