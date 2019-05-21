if @songs
  @songs.each do |song|
    json.songs do
      json.set! song.id do
        json.partial! 'api/songs/song', song: song
        json.favoritedUserIds []
        json.commentIds []
      end
    end

    json.users do
      json.set! song.artist_id do
        json.partial! 'api/users/user', user: song.artist
      end
    end
  end
end

if @users
  @users.each do |user|
    json.users do
      json.set! user.id do
        json.partial! 'api/users/user', user: user
      end
    end
  end
end

json.searchSuggestionIds @searchSuggestionIds
json.searchResultIds @searchResultIds