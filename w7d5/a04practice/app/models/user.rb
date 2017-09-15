class User < ApplicationRecord
  attr_reader :password
  validates :username, :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  has_many :links

  has_many :comments

  def self.find_by_creds(user_params)
    user = User.find_by(username: user_params[:username])
    return user if user &&
      BCrypt::Password.new(user.password_digest)
          .is_password?(user_params[:password])
    nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
