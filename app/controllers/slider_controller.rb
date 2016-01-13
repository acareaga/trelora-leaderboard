class SliderController < ApplicationController
  def index
    @ratings = Rating.all
    @leaderboard = Leaderboard.show
    @rating = Rating.show(1911)
  end
end
