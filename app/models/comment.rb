class Comment < ApplicationRecord
  validates :body, :user_id, :song_id, :song_time, presence: true

  after_initialize :ensure_song_id!
  after_initialize :ensure_song_time!

  belongs_to :user, foreign_key: :user_id
  belongs_to :song, foreign_key: :song_id
  belongs_to :parent_comment, class_name: 'Comment', foreign_key: :parent_comment_id, optional: true
  has_many :child_comments, class_name: 'Comment', foreign_key: :parent_comment_id

  private
  def ensure_song_id!
    self.song_id ||= self.parent_comment.song_id if parent_comment
  end

  def ensure_song_time!
    self.song_time ||= self.parent_comment.song_time if parent_comment
  end
end
