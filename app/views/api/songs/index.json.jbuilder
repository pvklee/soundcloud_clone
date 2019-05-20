@songs.each do |song|
  json.songs do
    json.set! song.id do
      json.partial! 'song', song: song
      json.favoritedUserIds []
      json.commentIds []
    end
  end

  json.artists do
    json.set! song.artist_id do
      json.partial! 'api/users/user', user: song.artist
    end
  end
end

json.filteredSongIds @filteredSongIds
json.songSearchIds @songSearchIds