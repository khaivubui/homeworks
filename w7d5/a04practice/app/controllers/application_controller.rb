class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  private

  def log_in(user)
    session[:session_token] = user.session_token
  end

  def log_out
    current_user.update(session_token: SecureRandom.urlsafe_base64)
    session[:session_token] = nil
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end

  def current_user
    @current_user ||= session[:session_token] &&
        User.find_by(session_token: session[:session_token])
  end
end
