json.user do
  json.partial! 'api/users/user', user: @user
  json.createdSongIds @user.songs.pluck(:id)
end