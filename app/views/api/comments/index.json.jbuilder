@comments.each do |comment|
  json.comments do
    json.set! comment.id do
      json.partial! 'comment', comment: comment
    end
  end
end