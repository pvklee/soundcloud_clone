json.extract! user, :username, :id
json.createdSongIds user.created_songs.pluck(:id)
json.favoriteSongIds user.favorite_songs.pluck(:id)
json.listenIds user.song_listens.pluck(:id)

user.users_followed.each do |user_followed|
  json.usersFollowing do
    json.set! user_followed.id do
      json.id user_followed.id
    end
  end
end

user.followers.each do |follower|
  json.followedBy do
    json.set! follower.id do
      json.id follower.id
    end
  end
end

if user.profilePictureFile.attached?
  json.profilePictureUrl url_for(user.profilePictureFile)
end