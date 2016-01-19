require "rails_helper"

# RSpec.describe MostRecent do

  feature 'User visits the root path' do
    scenario 'they see the most recent ratings slide on the page', js: true do
      visit root_path

      expect(page).to have_css '#most_recent', 'Most Recent Ratings'
    end
  end

# end
