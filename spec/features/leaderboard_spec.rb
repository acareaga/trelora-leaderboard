require 'spec_helper'

feature 'User visits the leaderboard slide' do
  scenario 'they see a ranking of agents and ratings on the page', :js => true do
    visit root_path

    expect(page).to have_css '#leaderboard', 'Leaderboard'
    expect(page).to have_content('LeaderBoard')
    expect(page).to have_content('5.0 RATING')
    expect(page).to have_content('Lead Agent')
  end
end
