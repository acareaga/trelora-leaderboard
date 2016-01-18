

feature 'User visits the root path' do
  scenario 'they see the leaderboard slide on the page', js: true do
    visit root_path

    expect(page).to have_css '.leaderboard', 'Leaderboard'
  end
end
