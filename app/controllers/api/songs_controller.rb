class Api::SongsController < ApplicationController
  def index
    @songs = params[:userId] ? User.find(params[:userId]).songs : Song.all.includes(:artist)
  end

  def create
    @song = Song.new(song_params)
    if @song.save!
      render 'api/songs/show'
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def show
    @song = Song.find(params[:id]).includes(:artist)
  end

  def update
    @song = Song.update(params[:id], song_params)
  end

  def destroy
    @song = Song.find(params[:id])
    if @song.destroy!
      render 'api/songs/destroy'
    end
  end

  private

  def song_params
    params.require(:song).permit(:title, :artist_id, :songFile, :genre)
  end
end
