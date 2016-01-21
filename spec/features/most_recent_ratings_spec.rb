# require 'spec_helper'
#
# feature 'User visits the most recent ratings slide' do
#   scenario 'they see the five most recent customer ratings on the page', :js => true do
#     visit root_path
#
#     sleep(32.second)
#     expect(page).to have_css '#most_recent_ratings', 'Most Recent Ratings'
#     expect(page).to have_content('Most Recent Ratings')
#     expect(page).to have_content('pricing_appointment')
#     expect(page).to have_content('5.0 RATING')
#     expect(page).to have_content('Customer')
#   end
# end
