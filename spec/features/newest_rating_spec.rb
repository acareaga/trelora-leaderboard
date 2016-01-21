require 'spec_helper'

feature 'User visits the newest rating slide' do
  scenario 'they see the most recent rating with related transaction details', :js => true do
    visit root_path
    sleep(62.second)

    expect(page).to have_content('Newest Rating:')

    within(:css, "#newest_rating") do
      expect(page).to have_css '#newest_transaction_rating'
      expect(page).to have_css '#newest_transaction_feedback_code'
      expect(page).to have_css '#member_photo'
      expect(page).to have_css '#newest_transaction_feedback_comments'
   end
  end

  scenario 'they see past ratings based on the newest rating transaction id', :js => true do
    visit root_path
    sleep(62.second)

    expect(page).to have_content('Previous Ratings')

    within(:css, "#previous_transaction") do
      expect(page).to have_css '#previous_transaction_customer_name'
      expect(page).to have_css '#transaction_feedback_created_at'
      expect(page).to have_css '#transaction_feedback_rating'
      expect(page).to have_content('Stars')
      expect(page).to have_content('Customer')
    end
  end
end
