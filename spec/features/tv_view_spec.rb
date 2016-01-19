require "rails_helper"

# RSpec.describe TvView do

  feature 'User visits the root path' do
    scenario 'they see the tv view slide on the page', js: true do
      visit root_path

      expect(page).to have_css '#tv_view', 'Newest Rating'
    end
  end

# end
