require 'rails_helper'

RSpec.describe User, type: :model do
  it { should validate_presence_of(:email) }

  it do
    should validate_presence_of(:password_digest)
      .with_message('Must have a password')
  end

  it { should validate_length_of(:password).is_at_least(6) }

  describe '#reset_session_token!' do
    it 'resets user#session_token' do
      user = User.create(email: 'user1', password: 'password1')
      before_reset = user.session_token
      user.reset_session_token!
      expect(user.session_token).not_to eq(before_reset)
    end
  end

  describe '::find_by_credentials' do
    it 'finds user given correct email and password' do
      user = User.create(email: 'user1', password: 'password1')
      found_user = User.find_by_credentials(email: 'user1', password: 'password1')
      expect(found_user).to be_a(User)
      expect(found_user).to eq(user)
    end

    it 'returns nil given incorrect email or password' do
      user = User.create(email: 'user1', password: 'password1')
      found_user1 = User.find_by_credentials(email: 'user1', password: 'applepie')
      found_user2 = User.find_by_credentials(email: 'applepie', password: 'password1')
      expect(found_user1).to be(nil)
      expect(found_user2).to be(nil)
    end
  end
end
