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
  has_one_attached :artFile

  has_many :favorites, foreign_key: :song_id
  has_many :favorited_users, through: :favorites, source: :user
  has_many :comments, foreign_key: :song_id

  def num_favorites
    favorites.count;
  end

  def self.allSongsByFavoritesCount
    Song.favorites_descending.map {|song| song.id}
  end

  def self.favorites_descending
    select('songs.*, count(favorites.id) as favorites_count').joins('LEFT OUTER JOIN favorites ON favorites.song_id = songs.id').group('songs.id').order('favorites_count desc')
    # SELECT songs.*, count(favorites.id) as favorites_count
    # FROM songs
    # LEFT OUTER JOIN favorites
    # ON songs.id = favorites.song_id
    # GROUP BY songs.id
    # ORDER BY favorites_count desc;
  end
end