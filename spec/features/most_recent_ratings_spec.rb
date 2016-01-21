require 'spec_helper'

feature 'User visits the most recent ratings slide' do
  scenario 'they see the five most recent customer ratings on the page', :js => true do
    visit root_path
    sleep(40.second)

    expect(page).to have_content('Most Recent Ratings')

    within(:css, "#most_recent_ratings") do
      expect(page).to have_css '#most_recent_customer_name'
      expect(page).to have_css '#most_recent_feedback_code'
      expect(page).to have_css '#most_recent_feedback_comments'
      expect(page).to have_css '#most_recent_feedback_rating'
      expect(page).to have_css '#most_recent_member_photo'
      expect(page).to have_content('pricing appointment')
      expect(page).to have_content('5.0 RATING')
      expect(page).to have_content('Customer')
    end
  end
end
