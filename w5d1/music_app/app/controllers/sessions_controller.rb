class SessionsController < ApplicationController
  before_action :ensure_logged_in, except: [:new, :create]

  def new
  end

  def create
    login!(User.find_by_credentials(user_params))
    redirect_to '/'
  end

  def destroy
    current_user && current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
    redirect_to new_session_url
  end
end
