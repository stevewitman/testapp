require 'rails_helper'

feature "angular test" do

  let(:email) { "test@test.com" }
  let(:password) { "test" }

  before do
    User.create!(
      email: email,
      password: password,
      password_confirmation: password)
  end

  scenario "Ang test app is working" do
    visit "angular_test"
    fill_in "Email", with: "test@test.com"
    fill_in "Password", with: "test"
    click_button "Log in"
    expect(page).to have_content("Name")

    fill_in "name", with: "Steve"
    within "header h1" do
      expect(page).to have_content("Hello, Steve")
    end
  end

end
