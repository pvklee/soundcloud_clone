class Search < ApplicationRecord
  validates :query, presence: true
  belongs_to :user, foreign_key: :user_id, optional: true
end
