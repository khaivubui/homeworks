class UsersController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      redirect_to links_url
    else
      flash[:errors] = @user.errors.full_messages
      render :new
    end
  end
end
