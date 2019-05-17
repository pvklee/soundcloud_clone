class Favorite < ApplicationRecord
  validates :user_id, :song_id, presence: true
  validates :song_id, uniqueness: {scope: :user_id}

  belongs_to :user, foreign_key: :user_id
  belongs_to :song, foreign_key: :song_id
end
