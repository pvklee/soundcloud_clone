class Api::UsersController < ApplicationController
  def index
    params[:songId] ? @users = Song.find(params[:songId]).commented_users : User.all
  end

  def create
    @user = User.new(user_params)
    if @user.save
      log_in!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if params[:profilePictureFile]  
      @user.profilePictureFile.attach(params[:profilePictureFile])
    elsif user_params
      @user.update(user_params)
    else
      render json: @user_params.errors.full_messages, status: 422
    end

    render "api/users/show"
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
