# require 'spec_helper'
#
# feature 'User visits the newest rating slide' do
#   scenario 'they see the most recent rating with related transaction details', :js => true do
#     visit root_path
#
#     sleep(62.second)
#     within(:css, "#tv_view") do
#       expect(page).to have_content('Newest Rating:')
#    end
#   end
#
#   scenario 'they see past ratings based on the newest rating transaction id', :js => true do
#     visit root_path
#
#     sleep(62.second)
#     within(:css, "#previous_transaction") do
#       expect(page).to have_content('Previous Ratings')
#       expect(page).to have_content('Stars')
#       expect(page).to have_content('Customer')
#     end
#   end
# end
