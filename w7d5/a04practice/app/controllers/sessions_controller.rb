class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    @user = User.find_by_creds(user_params)
    if @user
      log_in(@user)
      redirect_to links_url
    else
      flash[:errors] = ['WRONG MOTHERFUCKER']
      render :new
    end
  end

  def destroy
    log_out
    redirect_to new_session_url
  end
end
