//= require trelora_service
//= require weather

function renderSlides() {
  fetchLeaderboard()
  fetchMostRecentRatings()
  fetchMostRecentTransactionFromRatings()
  fetchNewestRating()
  renderWeather()
}
