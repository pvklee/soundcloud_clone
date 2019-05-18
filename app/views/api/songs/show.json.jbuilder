json.song do
  json.partial! 'song', song: @song
  json.favoritedUserIds @song.favorited_users.pluck(:id)
  json.commentIds @song.comments.pluck(:id)
end

json.artist do
  json.partial! 'api/users/user', user: @song.artist
end

# @lookout.reviews.includes(:author).each do |review|
#   json.reviews do
#     json.set! review.id do
#       json.partial! 'api/reviews/review', review: review
#     end
#   end

#   json.authors do
#     json.set! review.author.id do
#       json.extract! review.author, :id, :username
#     end
#   end
# end