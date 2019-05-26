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
  
  validates :title, :artist_id, :genre, :play_count, presence: true
  validates :genre, inclusion: { in: GENRES }
  belongs_to :artist, class_name: :User, foreign_key: :artist_id

  has_one_attached :songFile
  has_one_attached :artFile

  has_many :favorites, foreign_key: :song_id
  has_many :favorited_users, through: :favorites, source: :user
  has_many :comments, foreign_key: :song_id
  has_many :commented_users, through: :comments, source: :user
  has_many :song_listens, foreign_key: :song_id
  has_many :listened_users, through: :song_listens, source: :user

  after_initialize :ensure_play_count

  def has_songFile?
    if !self.songFile.attached?
      errors.add(:base, "No attached song")
    end
  end

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

  def mark_play!
    self.play_count = self.play_count + 1
  end

  private

  def ensure_play_count
    self.play_count ||= 0
  end
end