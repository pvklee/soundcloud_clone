json.comment do
  json.partial! 'comment', comment: @comment
end
json.songId @comment.song_id
json.userId @comment.user_id