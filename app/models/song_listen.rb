class SongListen < ApplicationRecord
  validates :song_id, presence: true

  belongs_to :user, foreign_key: :user_id, optional: true
  belongs_to :song, foreign_key: :song_id
end