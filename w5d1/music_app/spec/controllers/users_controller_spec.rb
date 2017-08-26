require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  describe "GET #new" do
    it "renders the new template" do
      get :new, {}
      expect(response).to render_template("new")
    end
  end

  describe "POST #create" do
    context "with invalid params" do
      it "validates the presence of the user's email and password" do
        post :create,
             params: {
               user: { email: 'user1' }
             }
        expect(response).to render_template("new")
        expect(flash[:errors]).to eq(["Password digest Must have a password"])
      end

      it "validates that the password is at least 6 characters long" do
        post :create,
             params: {
               user: { email: 'user1' , password: '1' }
             }
        expect(response).to render_template("new")
        expect(flash[:errors]).to eq(["Password is too short (minimum is 6 characters)"])
      end
    end

    context "with valid params" do
      it "redirects user to bands index on success" do
        post :create,
             params: {
               user: { email: 'user1' , password: 'password1' }
             }
        expect(response).to redirect_to('/')
        expect(User.last.email).to eq('user1')
        expect(session[:session_token]).to be_truthy
      end
    end
  end
end
