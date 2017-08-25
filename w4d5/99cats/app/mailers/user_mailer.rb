class UserMailer < ApplicationMailer
  def welcome_email(user)
    @user = user
    mail to: (user.username + '@gmail.com'), subject: 'Welcome to this site, thot'
  end
end
