class User < ApplicationRecord
  attr_reader :password

  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true

  has_many :created_songs, class_name: :Song, foreign_key: :artist_id, dependent: :destroy

  has_many :favorites, foreign_key: :user_id
  has_many :favorite_songs, through: :favorites, source: :song
  has_many :comments, foreign_key: :user_id
  has_many :searches, foreign_key: :user_id
  has_many :song_listens, foreign_key: :user_id
  has_many :listened_songs, through: :song_listens, source: :song

  has_one_attached :profilePictureFile

  after_initialize :ensure_session_token

  def createdSongIdsByFavoritesCount
    Song.where('artist_id = ?', self.id).favorites_descending.map {|song| song.id}
  end

  # auth

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save
    self.session_token
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  private

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def generate_session_token
    SecureRandom.base64(16)
  end
end
