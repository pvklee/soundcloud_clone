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

if @song_listens
  @song_listens.each do |song_listen|
    json.listens do
      json.set! song_listen.id do
        json.partial! 'api/song_listens/song_listen', song_listen: song_listen
      end
    end
  end
end

json.filteredSongIds @filteredSongIds
json.songSearchIds @songSearchIds