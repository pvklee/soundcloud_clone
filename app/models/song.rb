class Song < ApplicationRecord
  GENRES = [
    'Ambient',
    'Classical',
    'Country',
    'Dance & EDM',
    'Electronic',
    'Folk & Singer-Songwriter',
    'Hip-hop & Rap',
    'Indie',
    'Jazz & Blues',
    'Latin',
    'Metal',
    'Piano',
    'Pop',
    'R&B & Soul',
    'Reggae',
    'Rock',
    'Soundtrack',
    'World'
  ].sort.freeze
  
  validates :title, :artist_id, :genre, presence: true
  validates :genre, inclusion: { in: GENRES }

  belongs_to :artist, class_name: :User, foreign_key: :artist_id

  has_one_attached :songFile

  
end
