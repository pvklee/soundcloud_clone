class Api::SongListensController < ApplicationController
  def index
  end

  def create
    @song_listen = SongListen.new(listen_params)
    if @song_listen.save
      render 'show'
    else
      render json: @song_listen.errors.full_messages, status: 422
    end
  end

  private
  
  def listen_params
    params.require(:listen).permit(:user_id, :song_id)
  end
end
