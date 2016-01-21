require 'spec_helper'

feature 'User visits the leaderboard slide' do
  scenario 'they see a ranking of agents and ratings on the page', :js => true do
    visit root_path

    expect(page).to have_content('LeaderBoard')

    within(:css, "#leaderboard") do
      expect(page).to have_css '#leaderboard_member_photo'
      expect(page).to have_css '#leaderboard_member_name'
      expect(page).to have_css '#leaderboard_member_rating'
      expect(page).to have_content('5.0 RATING')
      expect(page).to have_content('Lead Agent')
    end
  end
end
