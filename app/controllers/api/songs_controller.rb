class Api::SongsController < ApplicationController
  def index
    if params[:userId]
      @songs = Song.where('songs.artist_id = ?', params[:userId])
    elsif params[:favoriteSongsFromUserId]
      @songs = User.find(params[:favoriteSongsFromUserId]).favorite_songs
    elsif params[:listenedSongsFromUserId]
      user = User.find(params[:listenedSongsFromUserId])
      @songs = user.listened_songs
      @song_listens = user.song_listens.order(id: :desc)
    elsif params[:stream]
      artistIds = current_user.users_followed.order(username: :desc).pluck(:id)
      @songs = Song.where(artist_id: artistIds).includes(:artist).order(id: :desc)
      @streamSongIds = @songs.pluck(:id)
    else
      @songs = Song.all.includes(:artist).order(id: :desc)
      @discoverSongIds = @songs.pluck(:id)
    end

  end

  def create
    @song = Song.new(song_params)
    if @song.save
      render 'api/songs/show'
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def show
    @song = Song.find(params[:id])
  end

  def update
    @song = Song.find(params[:id])
    if params[:artFile]  
      @song.artFile.attach(params[:artFile])
    elsif params[:markPlay]
      @song.mark_play!
      @song.save
    elsif song_params
      @song.update(song_params)
    else
      render json: @song.errors.full_messages, status: 422
    end

    render 'api/songs/show'
  end

  def destroy
    @song = Song.find(params[:id])
    if @song.destroy!
      render 'api/songs/destroy'
    end
  end

  def favorite
    @favorite = Song.find(params[:id]).favorites.create!(user_id: params[:userId])
    render 'api/favorites/show'
  end

  def unfavorite
    @favorite = Song.find(params[:id]).favorites.find_by(user_id: params[:userId])
    if @favorite.destroy!
      render 'api/favorites/show'
    end
  end

  private

  def song_params
    params.require(:song).permit(:title, :artist_id, :songFile, :artFile, :genre)
  end
end
