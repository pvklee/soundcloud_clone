class Api::CommentsController < ApplicationController
  def index
    @comments = params[:song_id] ? Song.find(params[:song_id]).comments : Comment.all
    render 'index'
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render 'show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    
  end

  def show
    @comment = Comment.find(params[:id])
    if !@comment
      render json: ['no comment found'], status: 404
    else
      render 'show'
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :user_id, :song_id, :parent_comment_id)
  end
end
