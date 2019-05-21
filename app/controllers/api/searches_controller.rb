class Api::SearchesController < ApplicationController
  def index
    @searchSuggestionIds = []
    @searchResultIds = []
    @songs
    @users
    if params[:queryForSuggestions] && (params[:queryForSuggestions] != "")
      query = params[:queryForSuggestions] + '%'
      @songs = Song.favorites_descending.where('songs.title ILIKE ?', query) # Array conditions ensure argument safety
      @users = User.all.where('username ILIKE ?', query)
      songSuggestionIds = @songs.map {|song| {type: 'song', id: song.id}}
      userSuggestionIds = @users.map {|user| {type: 'user', id: user.id}}
      @searchSuggestionIds = songSuggestionIds + userSuggestionIds
    end

    if params[:queryForResults] && (params[:queryForResults] != "")
      query = '%' + params[:queryForResults] + '%'
      @songs = Song.favorites_descending.where('songs.title ILIKE ?', query)
      @users = User.all.where('username ILIKE ?', query)
      songResultIds = @songs.map {|song| {type: 'song', id: song.id}}
      userResultIds = @users.map {|user| {type: 'user', id: user.id}}
      @searchResultIds = songResultIds + userResultIds
    end
  end

  def create
    @search = Search.new(search_params)
    if @search.save
      render 'show'
    else
      render json: @search.errors.full_messages, status: 422
    end
  end

  private

  def search_params
    params.require(:search).permit(:user_id, :query, :suggestion_type, :suggestion_id)
  end
end
